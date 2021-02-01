# Usage

## Functions

```scss
@use '~ioco-sass' as ioco;

// functions
$test1: ioco.contrast-of-color($color);

// Same algorithm as http://mcg.mbitson.com/
$customPalette: ioco.palette-from-color($color);

// Same as Tailwind CSS palettes
// https://tailwindcss.com/docs/customizing-colors
// map.get($twPalette, 'teal'); // returns another map
$twPalette: ioco.tailwind-get-colors();

// Same as Material Color palettes
// https://material.io/resources/color
// map.get($matPalette, 'teal'); // returns another map
$matPalette: ioco.material-get-colors();
```

## Mixins

```scss
@use '~ioco-sass' as ioco;
$colorMap: ioco.palette-from-color(pink);
:root {
  @include add-color-css-variables($colorMap, 'th-pink');
}
```

# Advanced

### Variable overrides

```scss
@use '~ioco-sass' with (
  $lightContrast: #efefef,
  $darkContrast: #333333,
);
```

### With as

```scss
@use '~ioco-sass' as ioco with (
  $lightContrast: #efefef,
  $darkContrast: #333333,
);
```

### NOTES

Contrast by default uses either white or black.

Dark modes available with preferred bg color
