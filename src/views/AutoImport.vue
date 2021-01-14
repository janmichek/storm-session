<template>
  <div class="auto-import">
    <ol>
      <li> start with typing <code>&#x5b;</code></li>
      <li> type some unique string of you component <code>T H</code></li>
      <li> confirm suggestion</li>
      <TheHeader></TheHeader>
    </ol>
  </div>
</template>

<script>
  import TheHeader from "@/components/TheHeader"
  export default {
    name: 'AutoImport',
    components: { TheHeader },
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
