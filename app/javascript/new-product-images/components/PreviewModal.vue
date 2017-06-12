<template>
    <div class="modal fade fill-in" id="previewModal">
        <button type="button" class="close" data-dismiss="modal">
            <i class="pg-close"></i>
        </button>
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header">
                </div>
                <div class="modal-body">
                    <div id="image-container">
                        <img ref="previewImage" :src="image.url" alt="" class="img-responsive-center"
                             style=' width: 100%; object-fit: contain'>

                    </div>
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        imgH: 0,
        imgW: 0,
      }
    },
    props: {
      image: Object
    },
    mounted() {
      let previewImage = this.$refs.previewImage;
    },
    updated() {
      let previewImage = this.$refs.previewImage;
    }
  }

</script>

<style>

    .img-responsive-center {
        display: block;
        margin: 0 auto;
        max-height: 100%;
        min-height: 500px;
        min-width: 100%;
        max-width: 100%;

    }
</style>