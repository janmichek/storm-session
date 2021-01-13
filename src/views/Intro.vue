<template>
  <div class="intro"></div>
</template>

<script>
  export default {
    name: 'Intro',
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
  .intro {

  }
</style>
