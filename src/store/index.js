import Vuex from 'vuex';
import Vue from 'vue';
import mock from './mock';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    list: mock.slice(0, 10),
    form: { message: '' },
    color: { message1: '' },
    comp: { message2: '' },
    temp: mock.slice(0, 10),
    yac: 0,
    temp1: [],
  },
  mutations: {
    updateSelect(state, message) {
      state.form = message;
    },
    updateColor(state, message1) {
      state.color = message1;
    },
    updateComponents(state, message2) {
      if (message2 !== 'Любые') {
        state.temp1.push(message2);
      } else state.comp = 'Любые';
    },
    clearSelect(state, message) {
      state.comp = message;
      state.color = message;
      state.form = message;
    },
  },
  getters: {
    list: state => {
      if (state.form === 'Любые' && state.color !== 'Любые' && state.color.length !== undefined) {
        console.log('1');
        state.list = state.list.filter(item => item.color === state.color);
      }
      if (state.color === 'Любые' && state.form !== 'Любые' && state.form.length !== undefined) {
        console.log('2');
        state.list = state.temp.filter(item => item.gradus === state.form);
      }
      if (state.form === 'Любые' && state.color === 'Любые' && state.comp === 'Любые') {
        console.log('3');
        console.log('на выход');
        return state.temp;
      }

      if (state.form.length === undefined && state.color.length === undefined
         && state.temp1.length === 0) {
        console.log(state.temp1);
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
      if (state.temp1.length !== undefined && state.comp !== 'Любые') {
        state.list = state.list.filter(item => {
          const partNames = item.parts.map(part => part.name);

          console.log('iterate', partNames, state.temp1);
          return state.temp1.every(filter => partNames.includes(filter));
        });
      }
      return state.list;
    },
  },
});

export default store;
