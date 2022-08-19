<template>
    <header>
      <nav class="nav">
        <div class="nav_list">
            <div class="nav_content">
                <router-link to="/cocoTree">coco3</router-link>
                <router-link to="/">home</router-link>
            </div>
            <div class="nav_content">
                <img src="" alt="">
            </div>
        </div>
    </nav>
    </header>
    <main>
        <h3>hello my coco four</h3>
        <div>Board with prop id: {{ id }}</div>
    </main>
    <footer>
        <h4>i know i am in coco four now</h4>
    </footer>
</template>

<script>
  export default {
    name: 'cocoFour',
    computed: {
      id() {
        return this.$route.params.id;
      },
    },
  }
</script>