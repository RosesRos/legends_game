<template>
  <header class="header">
        <div class="header_inner">
            <header-vue />
        </div>
    </header>
    <main class="main">
        <MainLegal/>
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
  import MainLegal from '@/components/main/MainLegal';

  
  export default {
    name: 'LegalVue',
    computed: {
      id() {
        return this.$route.params.id;
      },
    },
    components: {
      HeaderVue,
      FooterVue,
      MainLegal
    }
  }
</script>