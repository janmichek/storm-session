<template>
  <div class="history"></div>
</template>

<script>
  export default {
    name: 'History',
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
  .history {

  }
</style>
