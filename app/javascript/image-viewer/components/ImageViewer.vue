<template>
    <div class="row">
        <div class="col-md-6">
            <div class="img-responsive">
                <img :src="currentImage" alt="" class="img-responsive">
            </div>
        </div>
    </div>
</template>
<script>
  import {load} from '../upload';

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
        index < 20 ? index++ : index = 0;
        this.currentImage = this.images[index].image.url;
      }, 5000);
    },
    ready() {

    },
  };
</script>

<style></style>