<template>
  <div class="main">
    <div class="wrapper">
      <p>The cat website</p>
      <b-form-select v-model="breedCountrySelected" :options="breedsCountryOptions"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      breeds: [],
      breedsCountryOptions: [],
      breedCountrySelected: null
    };
  },
  watch: {
    breedCountrySelected(countryCode, oldCountryCode) {
      console.log("on change breed", countryCode, oldCountryCode);

      this.loadAllCats(countryCode);
    }
  },
  methods: {
    ...mapActions(["addCats"]),
    loadCats(breedId) {
      return axios
        .get("https://api.thecatapi.com/v1/images/search", {
          params: { breed_ids: breedId, limit: 5 }
        })
        .then(response => {
          console.log(`-- Cats from breedId ${breedId} TheCatAPI.com`);
          console.log(response.data);
          return response.data;
        });
    },
    loadAllCats(breedCountryCode) {
      const promise = [];
      let allCats = [];

      this.breeds
        .filter(x => x.country_code === breedCountryCode)
        .map(b => {
          promise.push(
            this.loadCats(b.id).then(cats => {
              allCats = allCats.concat(cats);
            })
          );
        });

      Promise.all(promise).then(() => {
        console.log("all cats", allCats);
        this.addCats(allCats);
      });
    }
  },
  mounted() {
    this.breeds = this.$store.getters.getBreeds;
    // redirect to home page if no breeds
    if (this.breeds === null) {
      this.$router.replace("/");
    } else {
      // prepare list with value and text
      const list = {};
      this.breeds.map(b => {
        if (list.hasOwnProperty(b.country_code) === false) {
          list[b.country_code] = { value: b.country_code, text: b.origin };
        }
      });

      this.breedsCountryOptions = Object.values(list);
      this.breedCountrySelected = this.breedsCountryOptions[0].value;
    }
  }
};
</script>

<style scoped>
.main {
  background-color: #3b99bf;
  height: 100px;
  line-height: 100px;
  color: white;
}

.wrapper {
  display: flex;
  align-items: center;
}

.wrapper p {
  padding: 0 45px;
  margin: 0;
  flex: 1;
}

select {
  width: 200px;
}
</style>
