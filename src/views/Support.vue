<template>
  <header class="header">
        <div class="header_inner">
            <header-vue />
        </div>
    </header>
    <main class="main">
        <Main-vue />
    </main>
    <footer class="footer">
        <div class="footer_inner">
            <footer-vue />
        </div>
    </footer>
</template>

<script>
    import HeaderVue from '@/components/header/Header';
    import MainVue from '@/components/main/Main.vue';
    import FooterVue from '@/components/footer/Footer.vue';

    export default {
      name: 'SupportVue',
      computed: {
        id() {
          return this.$route.params.id;
        },
      },  
      components: {
        HeaderVue,
        MainVue,
        FooterVue
      }  
    }
</script>
