<template>
    <div class="col-sm-12 col-md-6 img-responsive">
        <div class="panel " style="max-height:500px; border: 1px solid #ede4f1">
            <div class="panel-heading">
                <div class="panel-title">
                    <!--{{image.name}}-->
                </div>
                <div class="panel-controls">
                </div>
            </div>
            <div class="panel-body text-center">
                <div class="item-image " id="image-container">
                    <img :src="image.url" style='height: 100%; width: 100%; object-fit: contain'
                         @click="$emit('get-preview-image', image)" class="img-responsive">

                </div>
                <br>
                <div class="form-group">
                    <button class="btn btn-danger" @click="$emit('get-crop-image', image)">Crop</button>
                    <button class="btn btn-default" @click="$emit('delete-image', image)"> Remove </button>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
  import CropModal from './CropModal.vue';

  export default {
    name: 'ImageContainer',
    components: {},
    computed: {},
    props: {
      image: Object,
    },
    data: function() {
      return {};
    },
    methods: {},
    mounted() {
    },
    updated() {
    },
  };

</script>

<div>
</div>
<style>/**
 * The first commented line is your dabblet’s title
 */

.image-box {
    background: #ededed;
    width: 484px; /* Play with this value */
    height: 276px; /* Play with this value */
    font-size: 0;
    text-align: center;
}

.image-box:before {
    content: "";
    width: 1px;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    margin-left: -1px;
}

.image-box .img {
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
    vertical-align: middle;
}

.item-image {
    min-height: 350px;
    position: relative;
    overflow: hidden;
    padding-bottom: 70%;
}

.item-image img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
</style>