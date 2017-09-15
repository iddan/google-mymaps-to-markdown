const fs = require('fs')
const KML = require('./kml')

async function transformToCategoriesMarkdown(filename) {
  const kml = fs.readFileSync(filename, 'utf-8');
  const categories = await KML.toPlacesCategories(kml)
  const content = KML.Categories.toMarkdown(categories)
  console.log(content)
}

transformToCategoriesMarkdown(process.argv[2])
