<template>
  <header class="header">
    <div class="container">
      <div class="header_inner">
        <header-vue/>
      </div>
    </div>
  </header>
  <main>

  </main>
  <footer>
    
  </footer>
</template>

<script>

    import HeaderVue from '../components/header/Header';

    export default {
      name: 'PriceVue',
      computed: {
        id() {
          return this.$route.params.id;
        }
      },
      components: {
        HeaderVue
      }   
    }
</script>

<style lang="less">

</style>