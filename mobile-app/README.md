# MobileApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



#  Mobile App

  

##  Modulos de diseño

*  Bootstrap & Popper

```bash

npm install bootstrap
npm install @popperjs/core
```
  
  

*  Search Filter Pipe

```bash

npm install ng2-search-filter

```

  

*  Angular Material

```bash

ng add @angular/material

```

  

*  Angular Bootstrap Toasts

```bash

npm install angular-bootstrap-toasts

```

  
  

##  Implementación de capacitor y generación de la aplicacion movil

  

*  Instalación de capacitor

```bash

npm  install @capacitor/core @capacitor/cli

```

  

* Inicializar capacitor

```bash

npx cap init

```

  

*  Modificar el webDir con la carpeta de salida del compilado de angular en el archivo capacitor.config.json

```json

{

"webDir" : "dist/mobile-app"

}

```

  

*  Compilar Angular

```bash

ng build --build-optimizer --output-hashing=none

```

  

*  Preparación del entorno para android

```bash

npm install @capacitor/android
npx cap add android

```

  

*  Compilar y actualizar cambios dist en android

```bash

npx cap sync

npx cap copy

npx cap update

npx cap open

```

  

*  Permitir solicitudes http en android modificando archivo manifest

```xml

<application

android:usesCleartextTraffic="true">

</application>

```
