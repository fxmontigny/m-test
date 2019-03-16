<template>
  <div class="main">
    <div class="wrapper">
      <p>The cat website</p>
      <b-form-select v-model="breedSelected" :options="breedsOptions"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/stores/CatStore";

export default {
  data() {
    return {
      breeds: store.state.breeds,
      breedsOptions: [],
      breedSelected: null
    };
  },
  watch: {
    breedSelected(newBreed, olBreed) {
      console.log("on change breed", newBreed, olBreed);

      this.loadCats(newBreed);
    }
  },
  methods: {
    loadCats(breedId) {
      axios
        .get(
          "https://api.thecatapi.com/v1/images/search?breed_ids=" + breedId,
          {
            params: { limit: 10, size: "full" }
          }
        )
        .then(response => {
          console.log("-- Image from TheCatAPI.com");
          console.log(response.data);
        });
    }
  },
  mounted() {
    // redirect to home page if no breeds
    if (this.breeds === null) {
      this.$router.replace("/");
    } else {
      // prepare list with value and text
      this.breedsOptions = [];
      this.breeds.map((b, index) => {
        this.breedsOptions.push({ value: b.id, text: b.name });

        if (index === 0) {
          this.breedSelected = b.id;
        }
      });
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
