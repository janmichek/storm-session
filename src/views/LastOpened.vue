<template>
  <div class="last-opened"></div>
</template>

<script>
  export default {
    name: 'LastOpened',
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
  .last-opened {

  }
</style>
