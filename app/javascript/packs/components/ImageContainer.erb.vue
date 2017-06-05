<template>

    <div id="task">
        <img :src="image.url" alt="" class="img-thumbnail">
        <button class="btn btn-primary" @click="$emit('delete-image', image)"> Remove </button>
        <button class="btn btn-success pull-right" @click="$emit('crop-image', image)"> Crop </button>
    </div>

</template>

<script>
  export default {
    name: 'ImageContainer',
    props: {
      image: Object
    },
  };
</script>