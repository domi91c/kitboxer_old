<template>
    <div class="row">
        <div class="col-md-6">
            <div class="item-image " id="image-container" style="">
                <img :src="currentImage" style='height: 100%; width: 100%; object-fit: contain'
                     @click="zoomImage" class="">

            </div>
        </div>
    </div>
</template>
<script>
  import { load } from '../upload';

  export default {
    data() {
      return {
        images: [],
        currentImage: '',
        index: 0,
      };
    },
    props: {
      product: String,
    },
    computed() {
    },
    methods() {
    },
    mounted() {
      console.log('Product: ' + this.product);
      load(this.product).then(x => {
        var resp = JSON.parse(x);
        this.images = resp.images;
        this.currentImage = this.images[0].image.url;
      });
      let index = 0;
      window.setInterval(() => {
        index < 3 ? index++ : index = 0;
        this.currentImage = this.images[index].image.url;
      }, 1000);
    },
    ready() {

    },
  };
</script>

<style>



    .item-image {
        border:1px solid black;
        min-height: 350px;
        position: relative;
        overflow: hidden;
        padding-bottom: 90%;
        background-color: black;
    }

    .item-image img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
</style>
