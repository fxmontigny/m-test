<template>
  <div>
    <Menu/>
    <div class="wrapper">
      <p>Loading cats...</p>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import axios from "axios";
import { mapActions } from "vuex";

export default {
  components: {
    Menu
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["addBreeds"]),
    loadBreeds() {
      axios
        .get("https://api.thecatapi.com/v1/breeds?limit=20")
        .then(response => {
          console.log("-- Breeds from TheCatAPI.com");
          console.log(response.data);
          this.addBreeds(response.data);
          this.$router.replace("/cats"); // redirect to cats page
        });
    }
  },
  mounted() {
    console.log("mounted");
    axios.defaults.headers.common["Api-User-Agent"] =
      "fxaviermontigny@gmail.com";
    axios.defaults.headers.common["x-api-key"] =
      "58cb7e37-3f3a-4ca4-97d3-e16d9daaaaef"; // Replace this with your API Key

    this.loadBreeds();
  }
};
</script>

<style scoped>
.wrapper p {
  padding: 45px;
}
</style>
