<template>
  <div>
    <Menu/>
    <div class="wrapper">
      <CatCards class="cat-cards"/>
      <CatCards class="cat-cards"/>
      <CatCards class="cat-cards"/>
      <CatCards class="cat-cards"/>
      <CatCards class="cat-cards"/>
      <CatCards class="cat-cards"/>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import CatCards from "./CatCards.vue";

export default {
  components: {
    Menu,
    CatCards
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
}

.cat-cards {
  padding: 45px;
  width: 33%;
  box-sizing: border-box;
}
</style>
