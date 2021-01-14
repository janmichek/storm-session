<template>
  <div class="menu-list"></div>
</template>

<script>
  export default {
    name: 'MenuList',
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
  .menu-list {

  }
</style>
