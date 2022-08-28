<template>
    <article class="article">
        <section class="section">
            <div class="container">
                <div class="section_inner">
                    <banner-vue/>
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
        components: {
            BannerVue,
            MainControls,
            MainInfo,
        }
    }
</script>

<style lang="less">
    .section {
        overflow: hidden;
        &:nth-child(2) {
            margin-top: -1rem;
        }
    }
</style>