<template>
  <div class="auto-import">
    <ol>
      <li> start with typing <code>&#x5b;</code></li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'AutoImport',
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
  .auto-import {

  }
</style>
