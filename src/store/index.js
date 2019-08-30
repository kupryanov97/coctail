import Vuex from 'vuex';
import Vue from 'vue';
import mock from './mock';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    list: mock.slice(0, 70),
    form: { message: '' },
    color: { message1: '' },
    temp: '',
    temp1: '',
  },
  mutations: {
    updateSelect(state, message) {
      state.form = message;
    },
    updateColor(state, message1) {
      state.color = message1;
    },
  },
  getters: {
    list: state => {
      console.log(`Цвет:${state.color}Первый:${state.form}`);
      state.temp = state.form;
      state.temp1 = state.color;

      if (state.form === 'Любые' || state.color === 'Любые') {
        state.form = '';
        state.color = '';
        return state.list;
      }

      if (state.form.length === undefined && state.color.length === undefined) {
        return state.list;
      }

      if (state.color.length !== undefined && state.color.length > 0) {
        state.color = '';
        return state.list.filter(item => item.color === state.temp1);
      }

      return state.list.filter(item => item.gradus === state.form);
    },
  },
});

export default store;
