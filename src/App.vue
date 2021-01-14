<template>
  <div id="app">

    <the-header/>
    <div class="columns">
      <div class="column is-one-fifth">
        <the-sidebar/>
      </div>
      <div class="column">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style>
  html {
    filter: invert(100%) hue-rotate(180deg);;
  }

  #app {
    background: white;
    height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #2c3e50;
  }
</style>
<script>

  import TheSidebar from "@/components/TheSidebar"
  import TheHeader from "@/components/TheHeader"

  export default {
    components: { TheHeader, TheSidebar },
  }
</script>