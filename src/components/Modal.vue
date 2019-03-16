<template>
  <div class="main">
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
  methods: {},
  mounted() {}
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
  width: 100%;
}
</style>
