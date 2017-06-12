<template>
    <div class="col-md-12" style="">
        <div class="col-md-12">
            <h3 class="pull-left bold text-black ">Upload some images</h3>
            <div class="clearfix"></div>
            <hr>
            <br>
        </div>
        <input type="file" multiple :name="uploadFieldName"
               @change="filesChange($event)"
               accept="image/*" ref="fileField">
        <button class="btn btn-primary m-t-10" @click="save">Upload Files</button>

        <hr>
        <div v-for="image in uploadedFiles">
            <image-container :image="image"
                             :imageId="image.id"
                             @delete-image="deleteImage"
                             @finish-crop="finishCrop"
                             @get-crop-image="getCropImage"
                             @get-preview-image="getPreviewImage">
            </image-container>
        </div>

        <crop-modal v-if="cropImage"
                    :image="cropImage"
                    @finish-crop="finishCrop">
        </crop-modal>

        <preview-modal v-if="previewImage" :image="previewImage">
        </preview-modal>
    </div>
</template>

<script>
  import ImageContainer from './components/ImageContainer.vue';
  import CropModal from './components/CropModal.vue';
  import PreviewModal from './components/PreviewModal.vue';
  import {load, upload, update, remove} from './upload';

  const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

  export default {
    el: 'new-product-images',
    components: {
      ImageContainer,
      CropModal,
      PreviewModal,
    },
    props: {
      pass: String,
    },
    data() {
      return {
        uploadFieldName: 'images[]',
        uploadedFiles: [],
        uploadError: null,
        currentStatus: null,
        files: [],
        formData: new FormData(),
        cropImage: null,
        previewImage: null,
      };
    },
    methods: {
      openModal() {

        $('#modalFillIn').modal('show');
      },
      save() {
        if (!this.files.length) {
          return;
        }
        upload(this.formData).then(x => {
          x = JSON.parse(x);
          this.uploadedFiles.unshift(...x.images);
          this.currentStatus = STATUS_SUCCESS;
        }).catch(err => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
        this.resetFileInput();
      },
      resetFileInput() {
        this.formData = new FormData();
        this.$refs.fileField.value = null;
      },
      filesChange(event) {

        this.files = event.target.files;
        if (!this.files.length) {
          return;
        }

        // append the files to FormData
        for (var i = 0; i < this.files.length; i++) {
          this.formData.append('images[]', this.files[i]);
        }
      },
      deleteImage(image) {
        let index = this.uploadedFiles.indexOf(image);
        remove(image.id);
        this.uploadedFiles.splice(index, 1);
      },
      finishCrop(image, cropData) {
        update(image, cropData).then(x => {
          var imageData = JSON.parse(x);
          let index = this.uploadedFiles.indexOf(image);
          this.uploadedFiles.splice(index, 1, imageData);
          this.currentStatus = STATUS_SUCCESS;
        }).catch(err => {
          this.uploadError = err.response;
          console.log(this.uploadError);
          this.currentStatus = STATUS_FAILED;
        });

      },
      getCropImage(image) {
        $('#cropModal').modal('show');
        this.cropImage = image;
      },
      getPreviewImage(image) {
        $('#previewModal').modal('show');
        this.previewImage = image;
      },
    },
    created() {
      load().then(x => {
        x = JSON.parse(x);
        console.log(x);
        this.uploadedFiles = x.images;
        this.currentStatus = STATUS_SUCCESS;
        this.cropImage = this.uploadedFiles[0];
        this.previewImage = this.uploadedFiles[0];
      }).catch(err => {
        this.uploadError = err.response;
        this.currentStatus = STATUS_FAILED;
      });
    },
  };

</script>


<style scoped>
    p {
        font-size: 2em;
        font-family: Hack, serif;
    }

    .container {
        width: 500px;
        margin: 0 auto;
    }

    .progress_outer {
        border: 1px solid #000;
        width: 400px;
        height: 22px;
    }

    .progress {
        width: 0%;
        background: #DEDEDE;
        height: 20px;
    }
</style>
