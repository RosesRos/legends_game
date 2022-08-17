<template>
  <div v-bind:class="[{card: isGreen, coco: isRed}]">
    <h3 class="card_title">{{name}}</h3>
    <button class="card_btn" v-on:click="changeName">change name here</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      name: 'luis',
      isRed: true,
      isGreen: true
    }
  },
  methods: {
    changeName: function() {
      this.name = 'carlos'
      this.isRed = !this.isRed
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
  .card {
    text-align: center;
    max-width: 40rem;
    width: 100%;
    background: rgba(9, 9, 137, 0.2);
    margin: 0 auto;
    padding: 1rem;
  }

  .coco {
    text-align: center;
    max-width: 40rem;
    width: 100%;
    background: rgba(107, 137, 9, 0.2);
    margin: 0 auto;
    padding: 1rem;
  }  

  .card_title {
    color: brown;
    font-size: 1.6rem;
  }

  .card_btn {
    padding: 1rem;
    background-color: rgba(137, 9, 107, 0.2);
    color: wheat;
    border: none;
  }
</style>
