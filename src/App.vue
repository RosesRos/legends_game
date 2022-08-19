<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  
  // computed: {
  //   username() {
  //     return this.$route.params.username
  //   },
  // },
}
</script>

<style lang="less">

  @import url('styles/Main');

  #app {
    color: antiquewhite;
  }

</style>
