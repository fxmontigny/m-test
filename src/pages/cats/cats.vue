<template>
  <div>
    <Menu/>
    <div class="wrapper">
      <CatCards v-for="cat in cats" :key="cat.id" :cat="cat" class="cat-cards"></CatCards>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import CatCards from "./CatCards.vue";
import { mapState } from "vuex";

export default {
  components: {
    Menu,
    CatCards
  },
  computed: mapState({
    cats: state => state.cats.cats
  })
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
