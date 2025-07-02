const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const product = ref('Boots');
    const description = ref('A pair of warm, comfortable boots.');
    return {
      product,
      description
    }
  }

}).mount("#app")
