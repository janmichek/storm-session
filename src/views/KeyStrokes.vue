<template>
  <div class="key-strokes"></div>
</template>

<script>
  export default {
    name: 'KeyStrokes',
    props: {
      propName: {
        type: Boolean,
        required: true,
      },
    },
    data () {
      return {
        valueName: '',
      }
    },
  }
</script>

<style scoped>
  .key-strokes {

  }
</style>
