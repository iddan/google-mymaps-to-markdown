# Google MyMaps to Markdown

Transforms your map into a locations list

From this:
![MyMaps](https://image.ibb.co/eT8tg5/Screen_Shot_2017_09_16_at_02_48_42.png)

To:
```markdown
### Places
  
*Henning's Appartment*: Perleberger Str. 56, 10559 Berlin, Germany
```

### Usage

In the cloned repo directory:

```bash
GOOGLE_MAPS_GEO_ENCODING_API_KEY=$GOOGLE_MAPS_GEO_ENCODING_API_KEY node ./cli.js $FILENAME > $DESTFILE
```

You need to fill `$GOOGLE_MAPS_GEO_ENCODING_API_KEY`, `$FILENAME` and `$DESTFILE`
