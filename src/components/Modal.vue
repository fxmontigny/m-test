<template>
  <div class="main" @click="onClose">
    <div class="container">
      <img :src="cat.url">
      <div>
        <h3>{{ cat.breeds[0].name }}</h3>
        <div v-html="description"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    cat: { type: Object, default: null }
  },
  data() {
    return {
      description: null
    };
  },
  watch: {},
  methods: {
    onClose() {
      this.$emit("close");
    },
    loadDescription() {
      axios
        .get(
          "https://en.wikipedia.org/api/rest_v1/page/summary/" +
            this.cat.breeds[0].name +
            "_cat"
        )
        .then(response => {
          console.log(response.data);
          this.description = response.data.extract_html;
        });
    }
  },
  mounted() {
    this.loadDescription();
  }
};
</script>

<style scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 50%;
  padding: 32px;
  background-color: white;
  display: flex;
  align-items: stretch;
}

.container > div {
  flex: 1;
}

img {
  height: 200px;
  margin-right: 32px;
}
</style>
