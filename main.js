const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const product = ref('Boots');
    const description = ref('A pair of warm, comfortable boots.');
    const image = ref('./assets/images/socks_green.jpg');
    const productLink = ref('https://www.camt.cmu.ac.th');
    const inStock = ref(true);
    const inventory = ref(100);
    const onSale = ref(true);
    return {
      product,
      description,
      image,
      productLink,
      inStock,
      inventory,
      onSale
    }
  }

}).mount("#app")
