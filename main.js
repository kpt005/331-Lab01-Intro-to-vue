const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const product = ref('Boots');
    const brand = ref('SE 331');
    const description = ref('A pair of warm, comfortable boots.');
    const image = computed(() => {
      return variants.value[selectedVariant.value].image;
    });
    const productLink = ref('https://www.camt.cmu.ac.th');
    const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity
    });
    const inventory = ref(100);
    const onSale = ref(true);
    const onSaleString = computed(() => {
      return `${brand.value} ${product.value} is on sale!`;
    });
    const details = ref([
        '50% cotton',
        '30% wool',
        '20% polyester'
    ]);
    const variants = ref([
        { id: 2234, color: 'green',image: './assets/images/socks_green.jpg', quantity:50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
    ]);
    const selectedVariant = ref(0);
    const sizes = ref(['S', 'M', 'L']);
    const cart = ref(0);
    
    function addToCart() {
      cart.value += 1;
    }
    const title = computed(() => {
      return `${brand.value} ${product.value}`;
    });
    function updateVariant(index) {
      selectedVariant.value = index;
    }
    function updateImage(variantImage) {
      image.value = variantImage;
    }
    function toggleInStock() {
      const current = variants.value[selectedVariant.value];
      current.quantity = current.quantity > 0 ? 0 : 50;
    }
    return {
      product,
      brand,
      title,
      description,
      image,
      productLink,
      inStock,
      inventory,
      onSale,
      onSaleString,
      details,
      variants,
      sizes,
      cart,
      addToCart,
      updateVariant,
      updateImage,
      toggleInStock
    }
  }

}).mount("#app")
