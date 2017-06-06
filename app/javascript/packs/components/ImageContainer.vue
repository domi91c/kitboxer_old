<template>

    <div id="task">
        <h1>{{image.url}}</h1>
        <img :src="image.url" alt="" class="img-thumbnail" ref="img" width="400">
        <button class="btn btn-primary" @click="$emit('delete-image', image)"> Remove </button>
        <button class="btn btn-success pull-right" @click="cropImage"> Crop </button>
        <button class="btn btn-danger pull-right" @click="getCropData"> Finish Crop </button>
        <crop-modal></crop-modal>
    </div>

</template>

<script>
  import Cropper from 'cropperjs';
  import CropModal from './CropModal.vue';

  export default {
    name: 'ImageContainer',
    components: {
      CropModal
    },
    props: {
      image: Object
    },
    data: function() {
      return {
        cropData: {}
      };
    },
    methods: {
      cropImage() {
        this.cropper = new Cropper(this.$refs.img);
      },
      getCropData() {
        console.log(this.cropper.getData().height + "crop data");
        this.$emit('finish-crop', this.image, this.cropData = this.cropper.getData());
        this.cropper.destroy();
      }
    }
  }
</script>