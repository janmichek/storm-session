<template>
  <b-menu class="the-sidebar">
    <b-menu-list>

      <b-menu-item to="/intro" tag="router-link" label="Intro"/>
      <b-menu-item to="/layout" tag="router-link" label="Layout + columns +last opened + default"/>
      <b-menu-item to="/plugins" tag="router-link" label="Plugins"/>
      <b-menu-item to="/todo" tag="router-link" label="New File Template"/>

      <b-menu-item to="/autoimport" tag="router-link" label="Auto import"/>
      <b-menu-item to="/history" tag="router-link" label="Show history"/>
      <b-menu-item to="/extract" tag="router-link" label="Extract Vue components"/>
      <b-menu-item to="/folding" tag="router-link" label="Folding"/>
      <b-menu-item to="/keystrokes" tag="router-link" label="Keystrokes"/>
      <b-menu-item to="/gifs" tag="router-link" label="Cat GIFs"/>
    </b-menu-list>
  </b-menu>
</template>

<style scoped>
  .the-sidebar {
    background: #ececec;
    height: 100%;
  }
</style>
