<template>
  <header>
    <nav class="nav">
      <div class="nav_list">
        <div class="nav_content">
          <h1>is it legal?</h1>
          <router-link to="/price">price</router-link>
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
    name: 'LegalVue',
    computed: {
      id() {
        return this.$route.params.id;
      },
    },
  }
</script>