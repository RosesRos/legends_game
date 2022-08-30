<template>
    <article class="article">
        <section class="section">
            <div class="container">
                <div class="section_inner">
                    <div :class="{banner: bann}">
                        <banner-vue class="banner_inner" data-aos="zoom-in" ata-aos-offset="200" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out"/>
                    </div>
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

<script>
    import BannerVue from './Banner.vue';
    import MainControls from './MainControls';
    import MainInfo from './MainInfo';

    export default {
        name: 'MainVue',
        data() {
            return {
                bann: true,
            }
        },
        components: {
            BannerVue,
            MainControls,
            MainInfo,
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
        margin-top: 2rem;
        padding-top: 7rem;
        &_inner {
            background-image: radial-gradient(rgba(155, 79, 178, 0.8), rgba(69, 45, 103, 0.5)),
            url('../../assets/img/mun2.jpg');
            .bgImage();
            .backgroundCard();
            width: 100%;
            height: 55rem;
        }
    }
</style>