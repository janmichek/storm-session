<template>
  <b-menu class="the-sidebar">
    <b-menu-list>
      <b-menu-item to="/workplace" tag="router-link" label="1. Workplace"/>
      <b-menu-item to="/columns" tag="router-link" label="2. Columns"/>
      <b-menu-item to="/plugins" tag="router-link" label="3. Plugins"/>
      <b-menu-item to="/newFileTemplate" tag="router-link" label="4. New File Template"/>
      <b-menu-item to="/autoimport" tag="router-link" label="5. Auto import"/>
      <b-menu-item to="/history" tag="router-link" label="6. Show history"/>
      <b-menu-item to="/folding" tag="router-link" label="7. Folding"/>
      <b-menu-item to="/extract" tag="router-link" label="8. Extract Vue components"/>
      <b-menu-item to="/todo" tag="router-link" label="9. Todo"/>
      <b-menu-item to="/keystrokes" tag="router-link" label="10. Keystrokes"/>
      <b-menu-item to="/catgif" tag="router-link" label="Bonus Cat GIF"/>
    </b-menu-list>
  </b-menu>
</template>

<style scoped>
  .the-sidebar {
    background: #ececec;
    height: 100%;
  }
</style>
