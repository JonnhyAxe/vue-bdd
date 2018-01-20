// features/support/world.js
const { setWorldConstructor } = require('cucumber');

class CustomWorld {
  constructor() {

  }
};

setWorldConstructor(CustomWorld);
