import Vuex from 'vuex';
import Vue from 'vue';
import mock from './mock';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    list: mock.slice(0, 70),
    form: { message: '' },
    color: { message1: '' },
    comp: { message2: '' },
    temp: mock.slice(0, 70),
    temp1: '',
  },
  mutations: {
    updateSelect(state, message) {
      state.form = message;
    },
    updateColor(state, message1) {
      state.color = message1;
    },
    updateComponents(state, message2) {
      state.comp = message2;
    },
  },
  getters: {
    list: state => {
      console.log(`Первый:${state.form} ,Цвет:${state.color} ,Содержит:${state.comp}`);
      if (state.comp.length !== undefined) {
        // eslint-disable-next-line no-unused-expressions
        return state.list.filter(item => item.parts.includes(part => part.name === 'Водка'));
      }
      if (state.form === 'Любые' && state.color !== 'Любые') {
        console.log('1');
        return state.temp.filter(item => item.color === state.color);
      }
      if (state.color === 'Любые' && state.form !== 'Любые') {
        console.log('2');
        return state.temp.filter(item => item.gradus === state.form);
      }
      if (state.form === 'Любые' && state.color === 'Любые') {
        console.log('3');
        console.log('на выход');
        return state.temp;
      }

      if (state.form.length === undefined && state.color.length === undefined) {
        console.log('4');
        return state.temp;
      }

      if (state.color.length !== undefined && state.color !== 'Любые') {
        console.log('5');
        state.list = state.temp.filter(item => item.color === state.color);
      }
      if (state.form.length !== undefined && state.form !== 'Любые') {
        console.log('6');
        state.list = state.list.filter(item => item.gradus === state.form);
      }
      console.log('7');
      return state.list;
    },
  },
});

export default store;
