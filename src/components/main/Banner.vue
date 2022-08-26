<template>
    <div :class="{banner: bann}">
        <div class="banner_inner" data-aos="zoom-in" ata-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out">
            <div class="banner_block">
                <div class="banner_info">
                    <title-vue class="banner_title" title="The Leading"></title-vue>
                    <title-vue class="banner_title" title="League of Legends"></title-vue>
                    <title-vue class="banner_title" title="Boosting Platform"></title-vue>
                    <p class="banner_description">Sunt ipsum aliquip est occaecat labore. Ullamco minim laborum consectetur nostrud consequat Lorem minim esse mollit exercitati.</p>
                    <div v-bind:class="{banner_btn: info}">
                        <title-vue class="banner_btn_title" title="League of Legends"></title-vue>
                        <div class="banner_primary">
                            <router-link to="price">
                                <button-vue class="banner_btn_primary" v-slot="slotProps" button="Calculate Boots Prices">
                                {{slotProps.text}}
                                </button-vue>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="banner_img">
                </div>
            </div>
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
        margin-top: 2rem;
        padding-top: 7rem;
        &_inner {
            background-image: radial-gradient(rgba(155, 79, 178, 0.8), rgba(69, 45, 103, 0.5)),
            url('../../assets/img/mun2.jpg');
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
        &_block {
            padding: 5rem 6rem;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
        &_title {
            font-family: @font_6;
            font-size: 4rem;
            font-style: normal;
            text-shadow: @TextShadow var(--colorShadow);
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
            }
            &:nth-child(3) {
                font-size: 7rem;
                font-weight: 600;
                line-height: 2;
                text-shadow: none;
            }
        }
        &_description {
            font-size: 1.6rem;
            max-width: 50rem;
            width: 100%;
        }
        &_btn {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            &_title{
                font-size: 6rem;
                line-height: 1;
                color: transparent;
                -webkit-background-clip: text;
                background-clip: text;
                background-image: var(--textColorTwo);
                max-width: 30rem;
                width: 100%;
            }
            &_primary {
                padding: 0.8rem 8rem;
                font-size: 2rem;
                .primary();
            }
        }
    }

</style>