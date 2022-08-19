<template>
    <div class="nav_logo">
        <div class="nav_logo_img">
            <router-link to="/cocoTree">
                <img v-bind:src="crown" alt="Logo App" />
            </router-link>
        </div>
        <LogoTitle class="nav_logo_title" title="Boost Royal"></LogoTitle>
    </div>
</template>

<script>
    import crown from '../../assets/img/crown-4697.svg';
    import LogoTitle from './LogoTitle.vue';

    export default {
        name: 'LogoVue',
        data() {
            return {
                crown
            }
        },
        components: {
            LogoTitle
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
            &_img {
                max-width: 4rem;
                background-color: var(--logoBackground);
                padding: 1rem;
                border-radius: 50%;
                margin-right: 2rem;
            }
            &_title {
                color: whitesmoke;
                font-size: 2rem;
                font-family: @font_1;
                font-weight: 500;
                text-shadow: @TextShadow var(--textColorOne);
            }
        }
    }
</style>