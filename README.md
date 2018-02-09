<h1 align="center">
  <br>
  JW React
  <br>
</h1>

<h4 align="center">An <strong>easy to use</strong> boilerplate for a React application.</h4>

<p align="center">
  <a href="https://david-dm.org/jwoo92/jw-react-workflow">
    <img src="https://david-dm.org/jwoo92/jw-react-workflow/status.svg">
  </a>
  <a href="https://david-dm.org/jwoo92/jw-react-workflow?type=dev">
    <img src="https://david-dm.org/jwoo92/jw-react-workflow/dev-status.svg"></a>
  <a href="https://travis-ci.org/jwoo92/jw-react-workflow">
      <img src="https://travis-ci.org/jwoo92/jw-react-workflow.svg?branch=master">
  </a>
  <a href="https://github.com/jwoo92/jw-react-workflow/issues">
    <img src="https://img.shields.io/github/issues/jwoo92/jw-react-workflow.svg">
  </a>
  <a href="https://github.com/jwoo92/jw-react-workflow/issues">
    <img src="https://img.shields.io/badge/contributions-welcome-orange.svg">
  </a>
  <a href="https://github.com/jwoo92/jw-react-workflow/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#installation">Install</a> •
  <a href="#production">Production</a> •
  <a href="#tools">Tools</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="public/images/easy.gif" />
</p>

## Key Features

An **easy to use** boilerplate for a React application including:

* [React 16](https://github.com/facebook/react)
* [Redux](https://redux.js.org/)
* [Webpack 3](https://webpack.js.org/)
* [Babel 6](https://babeljs.io/)
* [CSS modules](https://github.com/css-modules/css-modules)
* [React Router](https://reacttraining.com/react-router/)
* [Immutable](https://facebook.github.io/immutable-js/)
* [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension)
* [Eslint](https://eslint.org/)
* [Jest](https://facebook.github.io/jest/)
* [Sass/SCSS](https://sass-lang.com/)

## Quick Start

```
git clone https://github.com/jwoo92/jw-react-workflow.git
cd jw-react-workflow
yarn
yarn start
```

## Installation

All you need to do is clone this repository

```
git clone https://github.com/jwoo92/jw-react-workflow.git
```

### Keep it up to date

Track this repo

```
git remote add upstream https://github.com/jwoo92/jw-react-workflow.git
```

Get the latest version and apply onto your stack

```
git fetch upstream
git merge upstream/master
```

## Running

Application has very few dependencies, so it’s most probably very easy to understand when you scan through the code, but there is at least few steps you should know

### Start front-end React application

React front-end, powered by `webpack-dev-server` in development mode.

To start this application run command below and open your app on `http://localhost:3000`

```javascript
yarn start
```

To test your application, run

* `yarn test` - single run - good for CI or precook

## Production

Running `yarn build` will create production ready application into your `dist` folder. All you need to do is make this `dist` folder publicly available.

## Tools

This project works with ReduxDevtool extension for chrome. [Read more](https://github.com/zalmoxisus/redux-devtools-extension)

## Contributing

Pull requests are welcome. For major changes, please open an [issue](https://github.com/jwoo92/jw-react-workflow/issues/new) first to discuss what you would like to change.

## Authors

* **Justin Woodward** - _Initial work_ - [jwoo92](https://github.com/jwoo92)

See also the list of [contributors](https://github.com/jwoo92/jw-react-workflow/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/jwoo92/jw-react-workflow/blob/master/LICENSE) file for details
