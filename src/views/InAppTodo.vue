<template>
  <div class="in-app-todo"></div>
</template>

<script>
  export default {
    name: 'InAppTodo',
    props: {
      propName: {
        type: Boolean,
        required: true,
      },
    },
    data () {
      return {
        // todo doublecheck before CR
        valueName: '',
      }
    },
  }
</script>

<style scoped>
  .in-app-todo {

  }
</style>
