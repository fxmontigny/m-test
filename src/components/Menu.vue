<template>
  <div class="main">
    <div class="wrapper">
      <p>The cat website</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/stores/CatStore";

export default {
  data() {
    return {
      breeds: store.state.breeds
    };
  },
  methods: {
    loadCats(breed) {
      axios
        .get("https://api.thecatapi.com/v1/images/search", {
          params: { limit: 10, size: "full", breed }
        })
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

.wrapper p {
  padding: 0 45px;
  margin: 0;
}
</style>
