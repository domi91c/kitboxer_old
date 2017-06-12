/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> and
// <%= stylesheet_pack_tag 'hello_vue' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue';
import App from './filepicker/app.vue';
import BootstrapVue from 'bootstrap-vue';

document.addEventListener('DOMContentLoaded', () => {
      let element = document.getElementById('new-product-images');
      let product = element.dataset.product;

      Vue.use(BootstrapVue);
      let app = new Vue(App);
    },
);



