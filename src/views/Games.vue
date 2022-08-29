<template>
    <header class="header">
        <div class="header_inner">
            <header-vue />
        </div>
    </header>
    <main class="main">
        <MainGame />
    </main>
    <footer class="footer">
        <div class="footer_inner">
            <footer-vue/>
        </div>
    </footer>
</template>

<script>
  import HeaderVue from '@/components/header/Header';
  import FooterVue from '@/components/footer/Footer.vue';
  import MainGame from '@/components/main/MainGame';

  export default {
    name: 'GamesVue',
    computed: {
      id() {
        return this.$route.params.id;
      },
    },
    components: {
      HeaderVue,
      MainGame,
      FooterVue
    }
  }
</script>