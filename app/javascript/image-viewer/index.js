import Vue from 'vue/dist/vue.esm';
import ImageViewer from './components/ImageViewer.vue';

document.addEventListener('DOMContentLoaded', () => {
  let element = document.getElementById('image-viewer');
  let product = element.dataset.product;

  console.log(product);
  const imageViewer = new Vue({
    el: element,
    data: {product: product},
    template: '<ImageViewer :product="product"/>',
    components: {ImageViewer},
  });
});