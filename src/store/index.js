import Vuex from 'vuex';
import Vue from 'vue';
import mock from './mock';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    list: mock.slice(0, 50),
    form: { message: '' },
    color: { message1: '' },
    comp: { message2: '' },
    temp: mock.slice(0, 50),
    yac: [],
    temp1: [],
    empty: '',
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
        console.log(`temp1:${state.temp1}`);
        state.comp = '';
      } else {
        state.comp = 'Любые';
        state.temp1 = [];
      }
    },
    clearSelect(state, message) {
      state.comp = message;
      state.color = message;
      state.form = message;
    },
  },
  getters: {
    list: state => {
      state.list = state.temp;
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
        console.log('4');
        console.log(state.temp1.length);
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


          return state.temp1.every(filter => partNames.includes(filter));
        });
      }
      console.log('33');
      if (state.list.length === 0) {
        alert('По вашему запросу ничего нейдено');
        return state.temp;
      }
      state.empty = state.list;
      return state.list;
    },
  },
});

export default store;
