<template>
  <div>
    <ul>
      <li>There is no such thing as over-componentization</li>
      <li>Its painful to split big file into components</li>
      <li>This feature will do manual work</li>
    </ul>

    <div class="search-bar">

      <div class="search-input">
        <input v-model="searchString" type="text">
      </div>

      <div class="search-button">
        <button @click="search()">search it</button>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'ExtractVueComponent',
    methods: {
      search () {
        return
      },
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
