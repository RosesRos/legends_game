<template>
    <article class="article">
        <section class="section">
            <div class="container">
                <div class="section_inner mt-32 pt-4">
                    <MainInfo />
                </div>
            </div>
        </section>
    </article>
</template>

<script>
    import MainInfo from './MainInfo.vue';

    export default {
        name: 'MainPrice',
        components: {
            MainInfo
        }
    }
</script>

<style lang="less">

</style>