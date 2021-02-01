# Usage

## Functions

```scss
@use '~ioco-sass' as ioco;
@use 'sass:map' as map;

// functions
$test1: ioco.contrast-of-color($color);

// Same algorithm as http://mcg.mbitson.com/
$customPalette: ioco.palette-from-color($color);

// Same as Tailwind CSS palettes
// map.get($twPalette, 'teal'); // returns another map
$twPalette: ioco.tailwind-get-colors();

// Same as Material Color palettes
// map.get($matPalette, 'teal'); // returns another map
$matPalette: ioco.material-get-colors();
```

## Mixins

[In Code](src/sass/abstracts/mixins/color-variables.scss)

```scss
@use '~ioco-sass' as ioco;

$matPalette: ioco.material-get-colors();
$tealMap: map.get($matPalette, "teal");
$deepOrangeMap: map.get($matPalette, "deepOrange");

:root {
  @include add-color-css-variables($tealMap, "--th-pink");
  @include add-color-css-variables($deepOrange, "--th-orange", true);
}
```

## Pre selected Palettes

Click on the **In Code** links to view all available names

### Material

[In Code](src/sass/palettes/material/_index.scss) from [material](https://material.io/resources/color)

<details>
<summary>Show Example</summary>
  
```scss
@use '~ioco-sass' as ioco;
@use 'sass:map' as map;

$matPalette: ioco.material-get-colors();
// One Color
$tealMap: map.get($matPalette, 'teal');

// All colors
:root {
@each $colorName, $colorMap in $matPalette{
    @each $shade, $color in $colorMap{
      --mat-#{$colorName}-#{$shade}: $color;
}
}
}

````
</details>

### Tailwind
[In Code](src/sass/palettes/tailwind/_index.scss) from [tailwindcss](https://tailwindcss.com/docs/customizing-colors)

<details>
<summary>Show Example</summary>

```scss
@use '~ioco-sass' as ioco;
@use 'sass:map' as map;

$twPalette: ioco.tailwind-get-colors();
// One Color
$emeraldMap: map.get($twPalette, 'emerald');

// All colors
:root {
  @each $colorName, $colorMap in $twPalette{
    @each $shade, $color in $colorMap{
      --mat-#{$colorName}-#{$shade}: $color;
    }
  }
}
````

</details>

### Dark Modes

[In Code](src/sass/palettes/dark-mode/_index.scss) from [this article](https://uxdesign.cc/dark-mode-ui-design-the-definitive-guide-part-1-color-53dcfaea5129)

<details>
<summary>Show Example</summary>
  
```scss
@use '~ioco-sass' as ioco;
@use 'sass:map' as map;

$darkModes: ioco.dark-mode-get-colors();

$dm-material: map.get($darkModes, 'material');

:root {
--dm-bg: map.get($dm-material, "bg");
  --dm-50: map.get($dm-material, 50);
--dm-100: map.get($dm-material, 100);
}

````
</details>

# Advanced

### Variable overrides

```scss
@use '~ioco-sass' with (
  $lightContrast: #efefef,
  $darkContrast: #333333,
);
````

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
