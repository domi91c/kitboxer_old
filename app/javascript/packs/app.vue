<template>
    <div id='filepicker'>
        <h1>File Picker 10,000</h1>
        <input type="file" multiple :name="uploadFieldName"
               @change="filesChange($event)"
               accept="image/*" ref="fileField">

        <button @click="save">Upload Files</button>

        <ul v-for="image in uploadedFiles">
            <image-container :image="image" :imageId="image.id" @delete-image="deleteImage"
                             @finish-crop="finishCrop" @get-crop-image="getCropImage"></image-container>
        </ul>
        <crop-modal v-if="cropImage" :image="cropImage" @finish-crop="finishCrop"></crop-modal>
    </div>
</template>

<script>
  import ImageContainer from './components/ImageContainer.vue';
  import CropModal from './components/CropModal.vue';
  import {load, upload, update, remove} from './upload';

  //  const node = document.getElementById('hello-vue');
  //  const data = JSON.parse(node.getAttribute('data'));

  const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

  export default {
    el: 'filepicker',
    components: {
      ImageContainer,
      CropModal
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
        cropImage: null
      }
    },
    methods: {
      test() {
        console.log("BTN WORKIN")
      },
      save() {
        if (!this.files.length) {
          return;
        }
        upload(this.formData).then(x => {
          x = JSON.parse(x);
          console.log('uploading new files:');
          console.dir(x.images);
          console.dir(this.uploadedFiles);
          this.uploadedFiles.push(...x.images);
          console.log('uploade new files:');
          console.dir(this.uploadedFiles);
          this.currentStatus = STATUS_SUCCESS;
        }).catch(err => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
        this.resetFileInput();
      },
      resetFileInput() {
        this.formData = new FormData();
        this.$refs.fileField.value = null
      },
      filesChange(event) {

        this.files = event.target.files;
        if (!this.files.length) return;

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
          this.currentStatus = STATUS_SUCCESS;
          let index = this.uploadedFiles.indexOf(image);
          this.uploadedFiles.splice(index, 1, imageData);
        }).catch(err => {
          this.uploadError = err.response;
          console.log(this.uploadError);
          this.currentStatus = STATUS_FAILED;
        });

      },
      getCropImage(image) {
        console.log("setting crop image to " + image.id);
        this.cropImage = image;
      }
    },
    created() {
      load().then(x => {
        x = JSON.parse(x);
        this.uploadedFiles = x.images;
        this.currentStatus = STATUS_SUCCESS;
      }).catch(err => {
        this.uploadError = err.response;
        this.currentStatus = STATUS_FAILED;
      });
    }
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
