# Google MyMaps to Markdown

Transforms your map into a locations list

### Usage

In the cloned repo directory:

```bash
GOOGLE_MAPS_GEO_ENCODING_API_KEY=$GOOGLE_MAPS_GEO_ENCODING_API_KEY node ./cli.js $FILENAME > $DESTFILE
```

You need to fill `$GOOGLE_MAPS_GEO_ENCODING_API_KEY`, `$FILENAME` and `$DESTFILE`

Tip: You can use a `env.sh` file:

``bash
source env.sh
```
