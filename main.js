const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const cart = ref([]);
    const premium = ref(true);
    function updateCart(id) {
      cart.value.push(id);
    }
    function removeCart(id) {
      const idx = cart.value.indexOf(id);
      if (idx !== -1) {
        cart.value.splice(idx, 1);
      }
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
      removeCart,
      cartCountMap
    };
  }

})

app.component('product-display', productDisplay);
app.component('product-details', productDetails);

app.mount('#app');