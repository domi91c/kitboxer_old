<template>

    <div id="task">
        <h1>{{image.url}}</h1>
        <img :src="image.url" alt="" class="img-thumbnail" ref="img" width="400">
        <b-btn class="btn btn-primary" @click="$emit('delete-image', image)"> Remove </b-btn>
        <b-btn v-b-modal.cropModal @click="$emit('get-crop-image', image)">{{image.id}}Show Modal</b-btn>
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
      },
    }
  }
</script>