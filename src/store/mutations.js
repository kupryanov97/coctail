export default {
  updateSelect(state, message) {
    console.log(message);
    state.vol = message;
  },
  updateColor(state, message1) {
    state.color = message1;
  },
  updateComponents(state, message2) {
    if (message2 !== 'Любые') {
      state.temp1.push(message2);
      state.comp = '';
    } else {
      state.comp = 'Любые';
      state.temp1 = [];
    }
  },
  clearSelect(state) {
    state.comp = 'Любые';
    state.color = 'Любые';
    state.vol = 'Любые';
  },
};
