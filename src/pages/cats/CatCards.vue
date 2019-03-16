<template>
  <div>
    <div class="cards" @click="onShowPopup">
      <div class="background" :style="{backgroundImage: 'url('+cat.url+')'}"></div>
      <div class="details">
        <p class="name">{{ cat.breeds[0].origin }}</p>
        <p class="breed">{{ cat.breeds[0].name }}</p>
      </div>
      <div class="actions">
        <button>Details</button>
      </div>
    </div>
    <Modal v-if="showPopup" :cat="cat" @close="onClosePopup"/>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  props: {
    cat: { type: Object, default: null }
  },
  components: {
    Modal
  },
  data() {
    return {
      showPopup: false
    };
  },
  methods: {
    onShowPopup() {
      this.showPopup = true;
    },
    onClosePopup() {
      this.showPopup = false;
    }
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
  background-size: cover;
  background-position: center;
}

.details {
  padding: 30px 30px 0 30px;
}

.details .name {
  font-size: 20px;
}

.details .breed {
  margin: 0;
}

.actions {
  text-align: right;
}

button {
  color: #3b99bf;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
</style>
