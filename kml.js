const {promisify} = require('util');
const Geocoder = require('node-geocoder');
const {parseString} = require('xml2js');

const XML = {
  parse: promisify(parseString),
};

const geocoder = Geocoder({provider: 'google', API_KEY: process.env.GOOGLE_MAPS_GEO_ENCODING_API_KEY});

let q = Promise.resolve();

const getAddress = async ({lat, lon}) => {
  q = q.then(async () => {
    await sleep(50);
    const addresses = await geocoder.reverse({lat, lon});
    const [{formattedAddress}] = addresses;
    return formattedAddress;
  });
  return q;
};

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

exports.toPlacesCategories = async function toPlacesCategories(kml) {
  const data = await XML.parse(kml);
  const [nodes] = data.kml.Document;
  const folders = nodes.Folder;
  return Promise.all(folders.map(async ({name: [name], Placemark}) => ({
    name,
    places: await Promise.all(Placemark.map(async ({name: [name], Point: [{coordinates: [coordinates]}]}) => {
      const [lon, lat] = coordinates.replace(/\s/g, '').split(',');
      return {
        name,
        address: await getAddress({lat, lon}),
      };
    })),
  })));
}

exports.Categories = {
  toMarkdown: function toMarkdown(categories) {
    return categories.map(category => `
  ### ${category.name}
  ${category.places.map(place => `
  *${place.name}*: ${place.address}
  `).join('\n')}`).join('\n');
  }
}
