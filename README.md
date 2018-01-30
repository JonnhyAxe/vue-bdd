# vue-bdd-boilerplate

A template to develop applications in BDD method using Cucumber. A perfect place to get you started in learning test driven development :rocket:.


> A full-featured Webpack setup based on vuejs-templates/webpack.
> This template is Vue 2.0 compatible.

## Architecture/Concept
This architecture is aimed to provide a simple to understand and use environment for learning BDD using Vuejs. A full featured, advanced environment is omitted on purpose. Why? To simplify the flow, and focus on one thing! That is understanding how user stories, features and test driven development works. The goal is to get a firm grasp of the concepts behind developing apps based on BDD..

As Vuex is used to manage the state of the application, it can be very tricky to test actions, since they can be async operations. In order to account for this in the most simplistic way, this architecture is used. Using `Promise` and `async/await` features, async actions can be easily tested. 
![picture alt](https://lh6.googleusercontent.com/TM4VZO0Ff-kcB3KsEbQkdTaii-U5R0hLwKNF22Pui0-UWqCeeSVQcQjP5_7W_25X8FimFXxAAidEPii66X3U=w1922-h951-rw "Async testing methodology")

## Documentation

- [For this template](http://vuejs-templates.github.io/webpack): common questions specific to this template are answered and each part is described in greater detail
- [For Vue 2.0](http://vuejs.org/guide/): general information about how to work with Vue, not specific to this template

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ vue init Techroombyjp/vue-bdd my-project
```

The development server will run on port 8080 by default. If that port is already in use on your machine, the next free port will be used.

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - Static assets compiled with version hashes for efficient long-term caching, and an auto-generated production `index.html` with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run cucumber`: BDD tests with [Cucumber](https://github.com/cucumber/cucumber-js)
  - Supports ES2015+ in test files.
  - Vuex store integrated.


### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
