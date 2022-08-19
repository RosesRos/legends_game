<template>
  <header>
    <nav class="nav">
      <div class="nav_list">
        <div class="nav_content">
          <router-link to="/cocoFour">coco4</router-link>
          <router-link to="/">home</router-link>
        </div>
        <div class="nav_content">
          <img src="" alt="">
        </div>
      </div>
    </nav>
  </header>
  <main>
    <h3>hello my coco tree</h3>
    <div>Board with prop id: {{ id }}</div>
  </main>
  <footer>
    <h4>i know i am in coco tree in this moment</h4>
  </footer>
</template>

<script>
  export default {
    name: 'cocoTree',
    computed: {
      id() {
        return this.$route.params.id;
      },
    },
  }
</script>