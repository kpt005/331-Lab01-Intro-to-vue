const productDetails = {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul style="font-size: 1.3em;">
      <li v-for="detail in details" :key="detail">{{ detail }}</li>
    </ul>
  `
};
