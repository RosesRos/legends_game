<template>
    <header>
    <nav class="nav">
      <div class="nav_list">
        <div class="nav_content">
          <h1>support</h1>
          <router-link to="/legal">legal</router-link>
          <router-link to="/games">games</router-link>
          <router-link to="/">home</router-link>
        </div>
        <div class="nav_content">
          <img src="" alt="">
        </div>
      </div>
    </nav>
  </header>
  <main>

  </main>
  <footer>
    
  </footer>
</template>

<script>
    export default {
      name: 'SupportVue',
      computed: {
        id() {
          return this.$route.params.id;
        },
      },    
    }
</script>

<style lang="less">

</style>