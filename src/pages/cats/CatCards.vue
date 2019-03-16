<template>
  <div class="cards">
    <div class="background" :style="{backgroundImage: 'url('+cat.url+')'}"></div>
    <div class="details">
      <p class="name"></p>
      <p class="breed">{{ cat.breeds[0].name }}</p>
    </div>
    <div class="actions">
      <button>Details</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cat: { type: Object, default: null }
  },
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
.cards {
  height: 300px;
  display: flex;
  flex-direction: column;
}

.background {
  flex: 1;
}

.details {
}
</style>
