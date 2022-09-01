<template>
    <div :class="{infos: info}">
        <div class="infos_inner" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="2500">
            <div class="infos_block">
                <div class="infos_info">
                    <div class="infos_head">
                        <title-vue class="infos_head_title" title="Boosting Calculator"></title-vue>
                        <InfoSubButton />
                    </div>
                    <div class="infos_body">
                        <title-vue class="infos_body_title" title="*Aproximately 1-2 Months Training & Playing"></title-vue>
                        <div class="infos_body_content" data-aos="fade-up" data-aos-duration="3300" data-aos-easing="linear">
                            <div class="infos_body_items" v-for="icon in icons" :key="icon.id">
                                <div class="infos_img">
                                    <img :src="icon.img" :alt="icon.alt">
                                </div>
                                <span>{{icon.description}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="infos_footer">
                        <router-link to="games" data-aos="fade-down-left" data-aos-anchor-placement="top-bottom" data-aos-duration="4900" data-aos-easing="linear">
                            <button-vue class="infos_footer_primary" v-slot="{text}"  button="Book Our Service">
                            {{ text }}
                            </button-vue>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Icons } from './DataMain';
    import TitleVue from '../subComponents/Title';
    import ButtonVue from '../subComponents/Button.vue';
    import InfoSubButton from './subMain/InfoSubButton.vue';


    export default {
        name: 'MainInfo',
        data() {
            return {
                info: true,
                icons: Icons
            }
        },
        components: {
            TitleVue,
            ButtonVue,
            InfoSubButton,
        }
    }
</script>

<style lang="less">
    @import url('../../styles/Main');

    .infos {
        &_inner {
            background-image: var(--headerBackground);
            background-origin: border-box;
            background-clip: content-box, border-box;
            border: 0.3rem solid rgba(204, 204, 204, 0.3);
            border-radius: 2rem;
            width: 100%;
        }
        &_info {
            padding: 5rem 6rem;
            text-align: center;
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
        &_head {
            padding-bottom: 3rem;
            &_title {
                font-size: 6rem;
                font-weight: 600;
                line-height: 2;
                text-shadow: none;
                font-family: @font_6;
                text-shadow: 1px 3px 7px #d64ee5;
                @media (max-width: @mobil-sm-landscape) {
                    font-size: 4.5rem;
                }
                @media (max-width: @tablet) {
                    font-size: 5rem;
                }
                @media (max-width: @mobil) {
                    font-size: 3rem;
                }
                @media (max-width: 320px) {
                    font-size: 2.7rem;
                }
            }
        }
        &_body {
            padding-top: 2rem;
            &_title {
                line-height: 1;
                text-shadow: none;
                color: transparent;
                -webkit-background-clip: text;
                background-clip: text;
                background-image: var(--textBackground);
                margin: 0.5rem 0;
                font-weight: 600;
            }
            &_content {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                padding: 3rem 1rem;
                @media (max-width: @mobil-landscape) and (orientation: landscape) {
                    gap: 4rem;
                }
                @media (max-width: @mobil) {
                    justify-content: center;
                }
            }
            &_items {
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                span {
                    padding: 1rem 0;
                }
                @media (max-width: @mobil-landscape) and (orientation: landscape) {
                    max-width: 20rem;
                    width: 100%;
                }
                @media (max-width: @mobil-sm-landscape) {
                    max-width: 18rem;
                    width: 100%;
                }
            }
        }
        &_img {
            padding: 2rem;
            max-width: 10rem;
            width: 100%;
            border: 0.3rem solid rgba(114, 79, 137, 0.5);
            border-radius: 100%;
        }
        &_footer {
            &_primary {
                padding: 1rem 4rem;
                max-width: 40rem;
                width: 100%;
                font-size: 2rem;
                .primary();
                @media (max-width: 320px) {
                    font-size: 1.8rem;
                }
            }
        }
    }

</style>