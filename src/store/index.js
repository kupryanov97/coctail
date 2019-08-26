import Vuex from 'vuex';
import Vue from 'vue';
// import axios from 'axios';

import mock from './mock';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    list: mock.slice(0, 10),
  },
  actions: {
    getData({ state }) {
      console.log('actions getData');
      state.list = mock;
    },
  },
});

export default store;
