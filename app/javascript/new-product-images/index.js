import Vue from 'vue/dist/vue.esm';
import NewProductImages from './components/NewProductImages.vue';

document.addEventListener('DOMContentLoaded', () => {
  let element = document.getElementById('new-product-images');
  let product = element.dataset.product;

  const app = new Vue({
    el: element,
    data: {product: product},
    template: '<NewProductImages :product="product"/>',
    components: {NewProductImages},
  });
});