<template>
    <div id='filepicker'>
        <h1>{{uploadError}}</h1>
        <input type="file" multiple :name="uploadFieldName"
               @change="filesChange($event)"
               accept="image/*" ref="fileField">

        <button @click="save">Upload Files</button>
        <ul v-for="image in uploadedFiles.images">
            <image-container :image="image" @delete-image="deleteImage" @finish-crop="finishCrop"></image-container>
        </ul>
    </div>

</template>

<script>
  import ImageContainer from './components/ImageContainer.erb.vue';
  import {load, upload, update, remove} from './upload';

  const node = document.getElementById('hello-vue');
  //  const data = JSON.parse(node.getAttribute('data'));

  const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

  export default {
    el: 'filepicker',
    props: {
      pass: String,
    },
    data: {
      uploadFieldName: 'images[]',
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      files: [],
      formData: new FormData(),
    },
    components: {
      ImageContainer
    },
    methods: {
      save() {
        if (!this.files.length) {
          return;
        }
        upload(this.formData).then(x => {
          x = JSON.parse(x);
          this.uploadedFiles = x;
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
        let index = this.uploadedFiles.images.indexOf(image);
        remove(image.id);
        this.uploadedFiles.images.splice(index, 1)
      },
      finishCrop(image, cropData) {
        update(image, cropData).then(imageData => {
          imageData = JSON.parse(imageData);
          console.log("UPDATE SUCCESSFUL");
          console.log(imageData);
          this.currentStatus = STATUS_SUCCESS;
          console.log(this.currentStatus);
          let index = this.uploadedFiles.images.indexOf(imageData);
          this.uploadedFiles.images.splice(index, 1, imageData);
        }).catch(err => {
          this.uploadError = err.response;
          console.log(this.uploadError);
          this.currentStatus = STATUS_FAILED;
          console.log(this.currentStatus);
        });

      }
    },
    created() {
      load().then(x => {
        x = JSON.parse(x);
        this.uploadedFiles = x;
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
