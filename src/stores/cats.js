const store = {
  state: {
    breeds: null,
    cats: []
  },
  getters: {
    getBreeds: state => {
      return state.breeds;
    }
  },
  actions: {
    addCats({ state, commit }, cats) {
      commit('setCats', cats);
    },
    addBreeds({ state, commit }, list) {
      commit('setBreeds', list);
    }
  },
  mutations: {
    setBreeds(state, breeds) {
      state.breeds = breeds;
      console.log(state.breeds);
    },
    setCats(state, cats) {
      state.cats = cats;
    }
  }
};

export default store;
