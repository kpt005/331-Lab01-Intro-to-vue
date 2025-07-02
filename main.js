const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const product = ref('Boots');
    const description = ref('A pair of warm, comfortable boots.');
    const image = ref('./assets/images/socks_green.jpg');
    return {
      product,
      description,
      image
    }
  }

}).mount("#app")
