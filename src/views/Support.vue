<template>
  <header class="header">
    <div class="header_inner">
      <header-vue/>
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
      name: 'SupportVue',
      computed: {
        id() {
          return this.$route.params.id;
        },
      },  
      components: {
        HeaderVue
      }  
    }
</script>

<style lang="less">

</style>