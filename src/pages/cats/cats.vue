<template>
  <div>
    <Menu/>
    <div class="wrapper">
      <CatCards v-for="cat in state.cats" :key="cat.id" :cat="cat" class="cat-cards"></CatCards>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import CatCards from "./CatCards.vue";
import store from "@/stores/CatStore";

export default {
  components: {
    Menu,
    CatCards
  },
  data() {
    return {
      state: store.state
    };
  },
  watch: {
    state(newState, oldState) {
      console.log("on change state", newState, oldState);
    }
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
