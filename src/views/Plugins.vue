<template>
  <div class="plugins"></div>
</template>

<script>
  export default {
    name: 'Plugins',
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
  .plugins {

  }
</style>
