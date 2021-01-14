<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Storm Session
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
  export default {
    name: 'TheHeader',
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
  .the-header {

  }
</style>
