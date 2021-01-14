<template>
  <div class="key-strokes">
    <ul>
      <li>
        CTRL + SHIFT + L
      </li>
      <li>
        Mouse 4 + Mouse 5
      </li>
      <li>CTRL + Scroll</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'KeyStrokes',
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
  .key-strokes {

  }
</style>
