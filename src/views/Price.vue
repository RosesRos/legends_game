<template>
  <header class="header">
        <div class="header_inner">
            <header-vue />
        </div>
    </header>
    <main class="main">
        <MainPrice />
    </main>
    <footer class="footer">
        <div class="footer_inner">
            <footer-vue/>
        </div>
    </footer>
</template>

<script>
    import HeaderVue from '@/components/header/Header';
    import MainPrice from '@/components/main/MainPrice';
    import FooterVue from '@/components/footer/Footer.vue';

    export default {
      name: 'PriceVue',
      computed: {
        id() {
          return this.$route.params.id;
        }
      },
      components: {
        HeaderVue,
        MainPrice,
        FooterVue
      }   
    }
</script>

<style lang="less">

</style>