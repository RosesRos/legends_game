<template>
    <div class="nav_logo">
            <router-link class="nav_logo_item" to="/">
                <div class="nav_logo_img">
                    <img v-bind:src="crown" alt="Logo App" />
                </div>
                <title-vue class="nav_logo_title" :title=" showTitleLogo ? null : 'Boost Royal'"></title-vue>
            </router-link>
    </div>
</template>

<script>
    import crown from '../../assets/img/crown-4697.svg';
    import TitleVue from '../subComponents/Title.vue';

    export default {
        name: 'LogoVue',
        data() {
            return {
                crown,
                showTitleLogo: false,
            }
        },
        methods: {
            setResizeTitle: function() {
                this.showTitleLogo = window.innerWidth <= 480;
            }
        },
        mounted() {
            window.addEventListener('resize', this.setResizeTitle);
            this.setResizeTitle();
        },
        unmounted() {
            window.removeEventListener('resize', this.setResizeTitle);
        },
        components: {
            TitleVue
        },
    }
</script>

<style lang="less">
    @import url('../../styles/Main');

    .nav {
        &_logo {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &_item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                @media (max-width: @mobil-landscape) and (orientation: landscape) {
                    cursor: none;
                }
                @media (max-width: @mobil-sm-landscape) {
                    cursor: none;
                }
            }
            &_img {
                max-width: 4rem;
                width: 60%;
                background-color: var(--logoBackground);
                padding: 1rem;
                border-radius: 50%;
                margin-right: 1.5rem;
                @media (max-width: @mobil) {
                    width: 100%;
                    margin-right: 0;
                    margin-left: 5rem;
                }
            }
            &_title {
                color: var(--textColorOne);
                font-size: 2rem;
                font-family: @font_1;
                font-weight: 500;
                text-shadow: @TextShadow var(--colorShadow);
            }
        }
    }
</style>