<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header id="header">
    <div class="container">
      <router-link to="/" class="logo" exact>Filmaria</router-link>
      <nav>
        <router-link to="/salvos" exact>Salvos <sup>(0)</sup></router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#header {
  background: brown;
  height: 13vh;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: white;
      text-decoration: none;

      &.logo {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }
}
</style>
