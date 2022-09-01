<template>
    <div>
      <div class="banner_block">
        <div class="banner_info">
          <title-vue class="banner_title" title="The Leading"></title-vue>
          <title-vue class="banner_title" title="League of Legends"></title-vue>
          <title-vue class="banner_title" title="Boosting Platform"></title-vue>
          <p class="banner_description">Sunt ipsum aliquip est occaecat labore. Ullamco minim laborum consectetur nostrud consequat Lorem minim esse mollit exercitati.</p>
          <div v-bind:class="{banner_btn: info}" data-aos="flip-down" ata-aos-offset="300" data-aos-delay="70" data-aos-duration="3000" data-aos-easing="ease-in-out">
            <title-vue class="banner_btn_title" title="League of Legends"></title-vue>
            <div class="banner_primary" data-aos="zoom-in" ata-aos-offset="200" data-aos-delay="40" data-aos-duration="3500" data-aos-easing="ease">
              <router-link to="price">
                <button-vue class="banner_btn_primary" v-slot="slotProps" button="Calculate Boots Prices">
                  {{slotProps.text}}
                </button-vue>
              </router-link>
            </div>
          </div>
        </div>
        <div class="banner_img"></div>
      </div>
    </div>
  </template>
  <script>
    import TitleVue from '../subComponents/Title.vue';
    import ButtonVue from '../subComponents/Button.vue';
    export default {
      name: 'BannerVue',
      data() {
        return {
          bann: true,
          info: true,
        }
      },
      components: {
        TitleVue,
        ButtonVue
      }
    }
  </script>
  <style lang="less" scoped>
    @import url('../../styles/Main');
  
    .banner {
      &_block {
        padding: 5rem 6rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        @media (max-width: @mobil-sm-landscape) {
          padding: 3rem;
        }
        @media (max-width: @tablet) {
          padding: 3rem;
        }
        @media (max-width: @mobil) {
          padding: 2rem;
        }
      }
  
      &_title {
        font-family: @font_6;
        font-size: 4rem;
        font-style: normal;
        text-shadow: @TextShadow var(--colorShadow);
        &:nth-child(1) {
          @media (max-width: @mobil) {
            font-size: 3rem;
          }
        }
  
        &:nth-child(2) {
          font-size: 6rem;
          font-weight: 600;
          line-height: 1;
          text-shadow: none;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          background-image: var(--textBackground);
          position: relative;
  
          &::before {
            content: 'League of Legends';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
            -webkit-background-clip: text;
            background-clip: text;
            background-image: var(--textBackground);
            .slidText();
          }
          @media (max-width: @mobil-landscape) and (orientation: landscape) {
            display: none;
          }
          @media (max-width: @mobil-sm-landscape) {
            display: none;
          }
        }
  
        &:nth-child(3) {
          font-size: 7rem;
          font-weight: 600;
          line-height: 2;
          text-shadow: none;
          @media (max-width: @mobil-sm-landscape) {
            font-size: 5rem;
          }
          @media (max-width: @tablet) {
            font-size: 5rem;
          }
          @media (max-width: @mobil) {
            font-size: 3rem;
          }
        }
      }
  
      &_description {
        font-size: 1.6rem;
        max-width: 50rem;
        width: 100%;
        @media (max-width: @mobil) {
          font-size: 1.4rem;
        }
      }
  
      &_btn {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @media (max-width: @mobil-sm-landscape) {
          flex-direction: column-reverse;
          align-items: flex-start;
          padding-top: 2rem;
        }
        &_title {
          font-size: 6rem;
          line-height: 1;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          background-image: var(--textColorTwo);
          max-width: 30rem;
          width: 100%;
          @media (max-width: @mobil-sm-landscape) {
            font-size: 4.5rem;
          }
        }
  
        &_primary {
          padding: 0.8rem 8rem;
          font-size: 2rem;
          .primary();
          @media (max-width: @mobil-landscape) and (orientation: landscape) {
            padding: 0.8rem 4rem;
            font-size: 1.6rem;
          }
          @media (max-width: @mobil) {
            font-size: 1.8rem;
          }
          @media (max-width: @mobil-sm) {
            font-size: 1.7rem;
            padding: 0.8rem 6rem;
          }
          @media (max-width: 320px) {
            padding: 0.8rem 3rem;
          }
        }
      }
    }
  </style>