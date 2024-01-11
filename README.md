# OnePage

[Project](http://localhost:4200/)
[GitHub](https://github.com/sygrok/Techcareer-AngularApp1)
[Angular GitHub](https://github.com/angular/angular-cli)
[Angular IO](https://angular.io/)
[npm](https://www.npmjs.com/)

## Kurulumlar

> node -v
> npm -v
> npm version
> npm list -g
> npm install -g typescript
> npm install -g @angular/cli
> ng version
> ng v
> ng new one-page
> cd one-page/
> ng serve
> ng serve --port 9999
> ng --help

## Angular CLI UNINSTALL (Dikkat: Keyfi olarak silmeyin.)

> npm list -g
> npm unistall -g angular/cli
> npm cache clean
> npm install -g @angular/cli@latest

## Angular NPM Kurulumları

- npm install bootstrap
- npm install font-awesome

---

## Angular Hakkında

- Angular 2009 Google Çalışan Misko tarafında kendi projelerinde kullanmak üzere başlıyor.
- Açık Kaynak Kodludur.
- SPA (Single Page Application)
- One Way Data Binding (\*)
- Two Way Data Binding (\*) ngModel directive View-Controller layer verileri bind(birleştirme)
- Angular Typescript üzerine inşaa edilmiştir.
- Typscript(Microsoft)= Javascript + ES5
- Az kod yaz , çok iş yap
- Javascript frameworktudur.
- Modüler bir yapıya sahiptir.
- MVC mantığına göre çalışıyor.
- Cross Platform
- DOM
- Componentlerden oluşur.
- Service= Database+
- Module= component+component ..component+ service

## Angular Realase

- Angular JS (2010)
- Angular 2
- Angular 4 (\*\*\*)
- Angular 5
- ...
- Angular 17

_2010 Angular JS_
_2016 Javascriptten Typescriptte geçildi_

## Angular And Other Lib&Framework Realase

- Git ( 2005 )
- Angular (2009)
- React (2013)
- Vue (2014)

## Typescript Hakkında

- Nesne yönelimli programlama yapacağımız bir dildir.
- Compiler
- TS= class + abstract inheritabce
- JS= Betik bir dildir
- TS=Nesne yönellimli bir dildir.

## Ecmascript Hakkında

- Javascript standartını oluşturur.
- 2009 (ES5)
- 2015 (ES6)

## Node JS Hakkında

- 2009 Asenkron olarak çalışan js'in server side olarak çalışmasına imkan sağladı
- Nodejs express,habi,meteor gibi framework yapılarıyla bir frameworktur.
- Asenkron (multi process)
- non-blocking

## Script

npm run start
npm run nodemon
npm run nodemon_q

## Npm Komutları

```sh
node -v
npm  -v

# package.json oluşturmak dikkat proje ismi:
# 1-) küçük harflerle
# 2-) boşluklar olmamalıdır bunun yerine (-)
# 3-) üğşçö kullanma
npm init
npm init -y

# package.json içindeki kütüphaneleri proje dahil etmek için kullanıyoruz.
npm install
npm i

# local npm'e neler yüklemişim
npm list   => LOCAL

# Global npm'e neler yüklemişim
npm list -g  => GLOCAL

# Global npm'e neler yüklemişim
# --depth=0 sadece ana yüklediğim dosyaları göster
npm list -g --depth=0

# npm Localde nereye yüklenmiş
npm root

# npm Globalde nereye yüklenmiş.
# C:\Users\90553\AppData\Roaming\npm\node_modules
npm root -g

# SEARCH
# npm üzerinde arama yapmak için kullanıyoruz.
npm search express
npm search mocha

# INSTALL
# --save (Production ortamında kurulması gerekiyor)
npm install -g bower --save
npm install  express --save
npm install  express@4.18.1 --save # Semantic Version: 4.18.1

# -dev (Test ortamında kurulması)
npm install mocha --save-dev
npm install tailwindcss -D

# DELETE
npm unistall express

# UPDATE
npm update # Bütün bağımlılıkları güncellemek
npm update express

npm doctor
npm audit
```

## Nodemon

```sh
node template.js
node template
npm install

npm search nodemon
npm install nodemon --save
npm install -g nodemon --save

"scripts": {
    "nodemon": "nodemon index.js",
    "nodemon_q": "nodemon -q index.js",
}

npm run nodemon
npm run nodemon_q
```

---

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