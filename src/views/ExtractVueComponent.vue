<template>
  <div class="search-bar">

    <div class="search-input">
      <input v-model="searchString" type="text">
    </div>

    <div class="search-button">
      <button @click="search()">search it</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ExtractVueComponent',
    methods: {
      search() {
        return
      }
    },
    data () {
      return {
        searchString: '',
      }
    },
  }
</script>

<style scoped>
  .search-bar {
    display: flex;
    flex-direction: row;
  }
  .search-input {
    height: 20px;
  }
</style>
