const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const cart = ref([]);
    const premium = ref(true);
    function updateCart(id) {
      cart.value.push(id);
    }
    const cartCountMap = computed(() => {
      const map = {};
      cart.value.forEach(id => {
        map[id] = (map[id] || 0) + 1;
      });
      return map;
    });
    return {
      cart,
      premium,
      updateCart,
      cartCountMap
    };
  }

})

app.component('product-display', productDisplay);
app.component('product-details', productDetails);

app.mount('#app');