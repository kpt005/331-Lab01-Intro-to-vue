const productDisplay = {
  
  template:
    //html
    `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img v-bind:src="image" alt="Boots" :class="{'out-of-stock-img': !inStock}" />
                </div>
            </div>
        </div>

        <div class="product-info">
            <h1>
                <a v-bind:href="productLink" target="_blank">{{brand+' '+product}}</a>
            </h1>
            <h1>{{title}}</h1>
            <p>{{description}}</p>
            <p v-if="inStock && inventory > 10">In Stock</p>
            <p v-else-if="inStock && inventory <= 10 && inventory > 0 ">Almost out of Stock</p>
            <p v-else>Out of Stock</p>
            <p v-if="onSale">{{onSaleString}}</p>
            <p v-else>Not on Sale</p>
            <p>Shipping: {{ shipping }}</p>
            <!-- Product-details from components -->
            <product-details :details="details"></product-details>
            <div style="font-size: 1.3em;">Sizes: <span v-for="(size, idx) in sizes">{{size}}<span v-if="idx < sizes.length - 1">, </span></span></div>
            <div style="font-size: 1.2em; " v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" v-bind:style="{ backgroundColor: variant.color }">
                {{variant.color}}
            </div>

            <!-- Display button using css style -->
            <div style="display: flex; gap: 1em;">
                <button class="button" :disabled="!inStock || !onSale" @click="addToCart" :class="{'disabledButton': !inStock || !onSale}">Add to Cart</button>
                <button class="button remove-button" @click="removeFromCart">Remove from Cart</button>
                <button class="button toggle-instock-button" @click="toggleInStock">Toggle In Stock</button>
            </div>

            <!-- Review Form -->
            <review-form></review-form>
            
        </div>

    `,
  props: {
    premium: Boolean
    },
    setup(props, { emit }) {
    const product = ref("Boots");
    const brand = ref("SE 331");
    const description = ref("A pair of warm, comfortable boots.");
    const image = computed(() => {
      return variants.value[selectedVariant.value].image;
    });
    const productLink = ref("https://www.camt.cmu.ac.th");
    const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity;
    });
    const inventory = ref(100);
    // onSale boolean
    const onSale = ref(true);
    const onSaleString = computed(() => {
      return `${brand.value} ${product.value} is on sale!`;
    });
    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    const variants = ref([
      { id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50 },
      { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0 }
    ]);
    const selectedVariant = ref(0);
    const sizes = ref(["S", "M", "L"]);
    const cart = ref(0);
    const shipping = computed(() => {
      if (props.premium) {
        return "Free";
      } else {
        return "30";
      }
    });

    function addToCart() {
      emit("add-to-cart", variants.value[selectedVariant.value].id);
    }
    function removeFromCart() {
      emit("remove-from-cart", variants.value[selectedVariant.value].id);
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
      removeFromCart,
      updateVariant,
      updateImage,
      shipping,
      toggleInStock,
    };
  },
};
