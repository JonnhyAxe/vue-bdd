// features/support/world.js
const { setWorldConstructor } = require('cucumber');

const Vue = require('vue');
const Vuex = require('vuex');

const baseModule = require('../../src/store/modules/baseModule').default;

Vue.use(Vuex);

class CustomWorld {
  constructor() {
    this.store = new Vuex.Store({
      modules: {
        base: baseModule,
      },
    });
  }

  setTo(number) {
    this.store.commit('base/SET_STATE', number);
  }

  setArray() {
    this.store.commit('base/SET_ARRAY');
  }

  incrementBy(number) {
    this.store.dispatch('base/increment', number);
  }

  getMessages() {
    return this.store.dispatch('base/getMessages');
  }

  setMessages(payload) {
    this.store.commit('base/MESSAGES_UPDATED', payload);
  }
};

setWorldConstructor(CustomWorld);
