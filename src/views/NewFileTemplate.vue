<template>
  <div class="new-file-template"></div>
</template>

<script>
  export default {
    name: 'NewFileTemplate',
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
  .new-file-template {

  }
</style>
