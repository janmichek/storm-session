<template>
  <div id="app">

    <the-header/>
    <div class="columns">
      <div class="column is-one-fifth">
        <the-sidebar/>
      </div>
      <div class="column">
        <div class="content">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  html {
    filter: invert(100%) hue-rotate(180deg);
  }

  img {
    filter: invert(100%) hue-rotate(180deg);
  }

  .columns {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }


  .menu .router-link-active {
    color: cyan !important;
    background: #fff;
  }

  li {
    list-style: none;
  }

  #app {
    font-size: 20px;
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