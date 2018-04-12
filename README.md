# Le logiciel PIA / The PIA Software
<img src="https://raw.githubusercontent.com/LINCnil/pia/develop/src/assets/images/pia-auth-logo.png" align="left" hspace="10" vspace="6"> Le logiciel PIA est un outil distribué librement par la [CNIL](https://www.cnil.fr/fr/outil-pia-telechargez-et-installez-le-logiciel-de-la-cnil) afin de faciliter la réalisation d’analyses d’impact sur la protection des données prévues par le RGPD.
Version web front office de l’application PIA à déployer sur un serveur afin d’en donner l’accès via un navigateur web. Ce projet est généré avec [Angular CLI](https://github.com/angular/angular-cli). 

The PIA software is a free tool published by the [CNIL](https://www.cnil.fr/en/open-source-pia-software-helps-carry-out-data-protection-impact-assesment) which aims to help data controllers build and demonstrate compliance to the GDPR. 
Front office of the PIA application to be deployed on a server in order to access it through a web browser. This project was generated with [Angular CLI](https://github.com/angular/angular-cli). 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Build for production

First you need to rename the file `src/environments/environment.prod.ts.example` to `src/environments/environment.prod.ts`.
Then set the version number inside this file.
And use the command `ng build --prod --build-optimizer --sourcemaps` for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Run in production mode 
Run `ng build --prod` 
Put `dist/` directory which is generated by ng build into your `www/` directory (like /var/www/html for default in Apache)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
