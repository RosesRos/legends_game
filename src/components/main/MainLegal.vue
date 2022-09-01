<template>
    <article class="article">
        <section class="section">
            <div class="container">
                <div class="section_inner">
                    <div :class="{banner: bann}">
                        <banner-vue class="banner_inner2" data-aos="zoom-in" ata-aos-offset="200" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out"/>
                    </div>
                </div>
            </div>
        </section>
    </article>
</template>

<script>
    import BannerVue from './Banner.vue';


    export default {
        name: 'MainLegal',
        data() {
            return {
                bann: true,
            }
        },
        components: {
            BannerVue,
        }
    }
</script>

<style lang="less">

    @import url('../../styles/Main');

    .section {
        overflow: hidden;
        &:nth-child(2) {
            margin-top: -1rem;
        }
    }

    .banner {
        &_inner2 {
            background-image: radial-gradient(rgba(155, 79, 178, 0.8), rgba(69, 45, 103, 0.5)),
            url('../../assets/img/mun1.jpeg');
            .bgImage();
            .backgroundCard();
            width: 100%;
            height: 55rem;
            @media (max-width: @mobil-sm-landscape) {
                height: 45rem;
            }
            @media (max-width: @tablet) {
                height: 45rem;
            }
            @media (max-width: @mobil) {
                background-position: left;
                height: 40rem;
            }
            @media (max-width: @mobil-sm) {
                height: 40rem;
            }
        }
    }
</style>