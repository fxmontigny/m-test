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
}

export default new CatStore();
