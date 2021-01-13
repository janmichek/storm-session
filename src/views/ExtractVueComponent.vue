<template>
  <div class="extract-vue-component"></div>
</template>

<script>
  export default {
    name: 'ExtractVueComponent',
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
  .extract-vue-component {

  }
</style>
