# PTS Webcomponents
A webcomponent library written purely in TypeScript that can be used with or without a framework.

# HTML Implementation
Import the JavaScript file using a `<script>` tag into the html file.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PTS Webcomponents</title>
    <script type="module">
      import './pts-webcomponents.esm.js';
    </script>
  </head>
  <body>
    <my-webcomponent></my-webcomponent>
  </body>
</html>
```

# Angular Implementation
### Note: Angular implmentation tests done with Angular 18. No other version has been tested.

There are four steps to impment this library in Angular.

First run ```npm install pts-webcomponents``` to add the library to the ```package.json```.
<br>
Then import `definePTSElements` from `pts-webcomponents.esm.js` using a `<script>` tag in the `index.html` file. Make sure `window` is passed into the `definePTSElements` function.
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>PtsTest</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <script type="module">
    import { definePTSElements } from '../node_modules/pts-webcomponents/dist/pts-webcomponents.esm.js';
    definePTSElements(window);
  </script>
</head>
<body>
  <app-root></app-root>
</body>
</html>
```
After that, import `CUSTOM_ELEMENTS_SCHEMA` into the component.ts file and add it to the `schemas` array in the `@Component` decorator.
```
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'pts-test';
}
```
Finally, add the tag to the `component.html` file.
```
<h1>Angular with PTS</h1>
<loading-bar></loading-bar>
```