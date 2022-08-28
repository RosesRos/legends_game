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
        &_inner2 {
            background-image: radial-gradient(rgba(155, 79, 178, 0.8), rgba(69, 45, 103, 0.5)),
            url('../../assets/img/mun1.jpeg');
            .bgImage();
            background-origin: border-box;
            background-clip: content-box, border-box;
            border: 0.3rem solid;
            border-right: 1px solid;
            border-bottom: 1px solid;
            border-image: linear-gradient(to left top, transparent 10%,  transparent 30%, transparent 70%, rgba(147, 45, 163, 0.8) 80%);
            border-image-slice: 1;
            border-radius: 2rem;
            width: 100%;
            height: 55rem;
        }
    }
</style>