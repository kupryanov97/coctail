export default {
  list: state => {
    state.list = state.temp;
    if (state.vol === 'Любые' && state.color !== 'Любые') {
      console.log('1');
      state.list = state.list.filter(item => item.color === state.color);
    }
    if (state.color === 'Любые' && state.vol !== 'Любые') {
      console.log('2');
      state.list = state.temp.filter(item => item.gradus === state.vol);
    }
    if (state.color !== 'Любые') {
      state.list = state.temp.filter(item => item.color === state.color);
    }
    if (state.vol !== 'Любые') {
      state.list = state.list.filter(item => item.gradus === state.vol);
    }
    if (state.comp !== 'Любые') {
      state.list = state.list.filter(item => {
        const partNames = item.parts.map(part => part.name);
        return state.temp1.every(filter => partNames.includes(filter));
      });
    }
    if (state.list.length === 0) {
      alert('По вашему запросу ничего нейдено');
      return state.temp;
    }
    alert(`найдено:${state.list.length} рецептов`);
    state.empty = state.list;
    console.log('111');
    return state.list;
  },
};
