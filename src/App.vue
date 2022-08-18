<template>
  <div  v-bind:class="[{card: isGreen, coco: isRed}]"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
  >
    <h3 class="card_title text-blue-600	">{{name}}</h3>
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

<style lang="less">

  // @import './index.css';
  @import url('styles/Main');


  .card {
    text-align: center;
    max-width: 40rem;
    width: 100%;
    background: var(--bodyBackground);
    margin: 0 auto;
    padding: 1rem;
    margin-top: 2rem;
  }

  .coco {
    text-align: center;
    max-width: 40rem;
    width: 100%;
    background: var(--bodyBackground);
    margin: 0 auto;
    padding: 1rem;
    margin-top: 2rem;

  }  

  .card_title {
    // color: brown;
    font-size: 1.6rem;
  }

  .card_btn {
    padding: 1rem;
    background-color: rgba(137, 9, 107, 0.2);
    color: wheat;
    border: none;
  }
</style>
