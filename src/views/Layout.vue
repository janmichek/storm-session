<template>
  <div class="layout">
    <ul></ul>

  </div>
</template>

<script>
  export default {
    name: 'Layout',
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
  .layout {

  }
</style>
