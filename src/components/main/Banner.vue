<template>
    <div :class="{banner: bann}">
        <div class="banner_inner">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'BannerVue',
        data() {
            return {
                bann: true
            }
        }
    }
</script>

<style lang="less" scoped>
    @import url('../../styles/Main');
    .banner {
        margin-top: 2rem;
        &_inner {
            background-image: radial-gradient(rgba(155, 79, 178, 0.8), rgba(69, 45, 103, 0.5)),
            url('../../assets/img/mun2.jpg');
            .bgImage();
            background-origin: border-box;
            background-clip: content-box, border-box;
            border: 0.3rem solid;
            border-image: linear-gradient(to left top, transparent 10%,  transparent 30%, transparent 70%, rgba(147, 45, 163, 0.8) 80%);
            border-image-slice: 1;
            border-radius: 2rem;
            width: 100%;
            height: 75rem;
        }
    }

</style>