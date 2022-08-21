<template>
    <article class="article">
        <section class="section">
            <div class="container">
                <div class="section_inner">
                    <banner-vue/>
                </div>
            </div>
        </section>
        <section class="section"></section>
    </article>
    <article class="article">
        <section class="section"></section>
        <section class="section"></section>
    </article>
</template>

<script>
    import BannerVue from './Banner.vue';

    export default {
        name: 'MainVue',
        components: {
            BannerVue,
        }
    }
</script>

<style lang="less">
    .section {
        overflow: hidden;
        &_inner {
            padding-top: 7rem;
        }
    }
</style>