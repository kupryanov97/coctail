export default {
  list: state => {
    state.list = state.temp;
    if (state.color !== 'Любые') {
      state.list = state.list.filter(item => item.color === state.color);
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
      alert('По вашему запросу ничего не найдено');
      return state.temp;
    }
    return state.list;
  },
};
