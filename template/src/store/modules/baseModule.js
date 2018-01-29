/*eslint-disable*/
import apiModule from '../../api';
import axios from 'axios';

const state = {
  messages: [],
  count: 0,
};

const actions = {
  getMessages: async (context) => {
    const msgs = await apiModule.fetchMessages();
    context.commit('MESSAGES_UPDATED', msgs);
    return new Promise(resolve => {
      resolve();
    });
  },
  increment (context, payload) {
    context.commit('INCREMENT', payload);
  },
};

const mutations = {
  MESSAGES_UPDATED: (state, messages) => {
    state.messages = messages;
  },
  SET_STATE (state, payload) {
    state.count = payload;
  },
  SET_ARRAY (state) {
    state.messages = [];
  },
  INCREMENT (state, payload) {
    state.count = state.count + payload;
  }
};

const getters = {
  messages: state => state.messages,
};

const baseModule = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default baseModule;
