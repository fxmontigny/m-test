class CatStore {
  constructor() {
    this.state = {
      breeds: null,
      cats: []
    };
  }

  setBreeds(breeds) {
    this.state.breeds = breeds;
  }

  setCats(cats) {
    this.state = { ...this.state, cats };
  }
}

export default new CatStore();
