<template>
  <header class="header">
    <div class="header_inner">
      <header-vue>
        <template #header>
          <div class="nav_content">
            <burger-vue />
          </div>
          <div class="nav_content">
            <LogoVue></LogoVue>
          </div>
          <div class="nav_content">
            <div class="nav_menu">
              <ul class="nav_menu_items">
                <li class="nav_menu_item" v-for="item in items" :key="item.id">
                  <router-link class="nav_menu_link" :to="item.rout">{{item.link}}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="nav_content">
            <HeaderButton />
          </div>
        </template>
      </header-vue>
    </div>
  </header>
  <main class="main">
    <Main-vue>
      <template #main>
        <article class="article">
          <section class="section">
            <div class="container">
              <div class="section_inner">
                <banner-vue />
              </div>
            </div>
          </section>
          <section class="section">
            <div class="container">
              <div class="section_inner">
                <MainControls />
              </div>
            </div>
          </section>
        </article>
        <article class="article">
          <section class="section">
            <div class="container">
              <div class="section_inner">
                <MainInfo />
              </div>
            </div>
          </section>
        </article>
      </template>
    </Main-vue>
  </main>
  <footer class="footer">
    <div class="footer_inner">
      <footer-vue>
        <template v-slot:footer>
          <div class="footer_main">
            <div class="footer_head" data-aos="fade-right" data-aos-duration="4300" data-aos-easing="linear">
              <img class="footer_logo" :src="Crack4" alt="Logo Footer">
            </div>
            <div class="footer_body">
              <div class="footer_menu">
                <ul class="footer_menu_items">
                  <li class="footer_menu_item" v-for="item in items" v-bind:key="item.id">
                    <router-link class="footer_menu_link" :to="item.rout">{{item.link}}</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer_foot" data-aos="fade-left" data-aos-duration="4300" data-aos-easing="linear">
              <img class="footer_logo" :src="Crack5" alt="Logo Footer">
            </div>
          </div>
        </template>
      </footer-vue>
    </div>
  </footer>
</template>
<script>
  import HeaderVue from '@/components/header/Header';
  import MainVue from '@/components/main/Main.vue';
  import FooterVue from '@/components/footer/Footer.vue';

  import { Data } from '@/components/header/DataMenu';
  import LogoVue from '@/components/header/Logo';
  import HeaderButton from '@/components/header/HeaderButton';
  import BurgerVue from '@/components/header/Burger';

  import BannerVue from '@/components/main/Banner';
  import MainControls from '@/components/main/MainControls';
  import MainInfo from '@/components/main/MainInfo';

  import Crack4 from '../assets/img/cra4.png';
  import Crack5 from '../assets/img/cra5.png';
  
  export default {
    name: 'HomeVue',
    data() {
      return {
        items: Data,
        Crack4,
        Crack5,
      }
    },
    components: {
      HeaderVue,
      MainVue,
      FooterVue,
      LogoVue,
      HeaderButton,
      BurgerVue,
      BannerVue,
      MainControls,
      MainInfo
    }
  }
</script>
<style lang="less"></style>