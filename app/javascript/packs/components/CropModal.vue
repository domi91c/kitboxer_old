<template>
    <b-modal :id="`modal${image.id}`" ref="cropModal" class="text-center">
        <img :src="image.url" alt="" class="img-thumbnail cropImg text-center" ref="cropImg">
        <div slot="modal-footer">
            <b-btn variant="secondary" @click="cancelCrop">Cancel</b-btn>
            <b-btn variant="primary" @click="getCropData">{{image.id}}Crop</b-btn>
        </div>
    </b-modal>
</template>

<script>

  import Cropper from 'cropperjs';

  export default {
    name: 'CropModal',
    props: {
      image: Object
    },
    methods: {
      getCropData() {
        this.$refs.cropModal.hide();
        this.$emit('finish-crop', this.image, this.cropData = this.cropper.getData());
      },
      cancelCrop() {
        this.$refs.cropModal.hide()
      }
    },
    mounted() {
      this.cropper = new Cropper(this.$refs.cropImg, {
        viewMode: 3,
        aspectRatio: 16/9,
        minContainerWidth: 400,
        minContainerHeight: 400,
        preview: this.$refs.preview,
        background: false
      });
    },
    updated() {
      this.cropper.destroy();
      console.log('updating');
      this.cropper = new Cropper(this.$refs.cropImg, {
      viewMode: 3,
      aspectRatio: 16/9,
      minContainerWidth: 600,
      minContainerHeight: 600,
      preview: this.$refs.preview,
    });
    }
  }
</script>

<style>
    .modal {
        height: 600px;

    }

    .modal-body {
        height: 600px;

    }

</style>