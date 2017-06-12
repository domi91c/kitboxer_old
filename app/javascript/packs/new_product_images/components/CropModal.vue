<template>
    <div class="modal fade" tabindex="-1" role="dialog" id="cropModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title">Modal title</h4>
                    <h4 class="modal-title">{{image.name}}</h4>
                </div>
                <div class="modal-body">
                    <div class="text-center" style="display: inline-block;">
                        <vue-cropper
                                ref='cropper'
                                :aspect-ratio="3/2"
                                :guides="false"
                                :view-mode="1"
                                :drag-mode="'crop'"
                                :auto-crop-area="0.5"
                                :min-container-width="550"
                                :min-container-height="500"
                                :background="false"
                                :rotatable="true"
                                :src="image.url"
                                alt="Source Image"
                                :img-style="{  width: '500px', height: '500px'  }" >
                        </vue-cropper>
                    </div>

                </div>
                <div class="modal-footer">
                    <b-btn variant="secondary" @click="cancelCrop">Cancel</b-btn>
                    <b-btn variant="primary" @click="sendCropData">Crop</b-btn>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</template>

<script>

  import VueCropper from 'vue-cropperjs';

  export default {
    name: 'CropModal',
    components: {
      VueCropper,
    },
    props: {
      image: Object,
    },
    methods: {
      sendCropData() {
        $('#cropModal').modal('hide');
        this.cropImg = this.$refs.cropper.getData();
        this.$emit('finish-crop', this.image, this.cropImg);
      },
      cancelCrop() {
        $('#cropModal').modal('hide');
      },
      resetModal() {
        this.$refs.cropper.replace(this.image.url);
      },
    },
    mounted() {
      this.resetModal();
    },
    updated() {
      this.resetModal();
    },
  };
</script>

<style lang="scss">
    .modal {
        height: 100%;
    }

    .modal-body {
    }

</style>