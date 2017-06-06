<template>

    <div id="task">
        <h1>{{image.url}}</h1>
        <img :src="image.url" alt="" class="img-thumbnail" ref="img" width="400">
        <button class="btn btn-primary" @click="$emit('delete-image', image)"> Remove </button>
        <b-btn v-b-modal="`modal${image.id}`">{{image.id}}Show Modal</b-btn>
        <crop-modal :image="image" @finish-crop="finishCrop"></crop-modal>
    </div>

</template>

<script>
  import CropModal from './CropModal.vue';

  export default {
    name: 'ImageContainer',
    components: {
      CropModal,
    },
    computed: {},
    props: {
      image: Object
    },
    data: function() {
      return {
        cropData: {}
      };
    },
    methods: {
      finishCrop(image, cropData) {
        this.$emit('finish-crop', image, cropData);
      }
//      cropImage() {
//        this.cropper = new Cropper(this.$refs.img);
//        this.cropper({background: false})
//      },
////      getCropData() {
////        console.log(this.cropper.getData().height + "crop data");
////        this.$emit('finish-crop', this.image, this.cropData = this.cropper.getData());
////        this.cropper.destroy();
//      },
    }
  }
</script>