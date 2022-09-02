<template>
    <nav :class="flag ? Active : Nav">
        <div class="nav_list">
            <div class="nav_content">
                <burger-vue @click="showMenu"/>
            </div>
            <div class="nav_content">
                <LogoVue></LogoVue>
            </div>
            <div class="nav_content">
                <div class="nav_menu">
                    <ul class="nav_menu_items">
                        <li class="nav_menu_item" v-for="item in items" :key="item.id">
                            <router-link v-on:click="closeLInk" class="nav_menu_link" :to="item.rout">{{item.link}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nav_content">
                <HeaderButton />
            </div>
        </div>
    </nav>
</template>

<script>
    import { Data } from './DataMenu';
    import LogoVue from './Logo';
    import HeaderButton from './HeaderButton';
    import BurgerVue from './Burger.vue';
    
    export default {
        name: 'HeaderVue',
        data() {
            return {
                items: Data,
                flag: false,
                Nav: 'nav',
                Active: 'nav active'
            }
        },
        watch: {
            flag: function showMenu() {
                if  (this.flag) {
                    document.body.style.overflow = 'hidden';
                    return
                }

                document.body.style.overflow = 'auto';
            }
        },
        methods: {
            checkSize: function() {
                this.flag = window.innerWidth <= 860;
            },
            showMenu() {
                if (this.checkSize) {
                    this.flag = !this.flag
                    return
                }
            },
            closeLInk: function() {
                if (this.checkSize) {
                    this.flag = false
                    return
                }
            }
        },
        components: {
            LogoVue,
            HeaderButton,
            BurgerVue
        }
    }
</script>

<style lang="less">
    @import url('../../styles/Main');

    header {
        overflow: hidden;
        .nav {
            font-family: @font_2;
            overflow: hidden;
            position: fixed;
            left: 0;
            right: 0;
            background-image: var(--headerBackground);
            .bgImage();
            border-bottom: 1px solid;
            border-image: linear-gradient(to right, #532b5f, #9E3FD6, #532b5f,) 47% 0%;
            z-index: 10;
            &_list {
                padding: 2rem 15rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                @media (max-width: @desktop) {
                    padding: 2rem 5rem;
                }
                @media (max-width: @laptop) {
                    padding: 2rem 2rem;
                }
                @media (max-width: @mobil-landscape) and (orientation: landscape) {
                    padding: 2rem 4rem;
                }
                @media (max-width: @mobil) {
                    padding: 1.5rem;
                }
            }
            &_content {
                display: flex;
                justify-content: space-between;
                &:nth-child(1) {
                    display: none;
                    @media (max-width: @mobil-landscape) and (orientation: landscape) {
                        display: block;
                    }
                    @media (max-width: @mobil-sm-landscape) {
                        display: block;
                    }
                }
                &:nth-child(3) {
                    @media (max-width: @mobil-landscape) and (orientation: landscape) {
                        display: none;
                    }
                    @media (max-width: @mobil-sm-landscape) {
                        display: none;
                    }
                }
            }
            &_menu {
                padding-left: 10rem;
                @media (max-width: @laptop) {
                    padding-left: 5rem;
                }
                &_items {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                &_item {
                    padding: 1rem;
                    margin-right: 2rem;
                }
                &_link {
                    position: relative;
                    transition: all .2s linear; 
                    &::after {
                        display: block;
                        content: '';
                        position: absolute;
                        bottom: -5px;
                        left: 0;
                        background: var(--textColorOne);
                        .bgImage();
                        border-radius: 20px;
                        width: 100%;
                        height: 0.2rem;
                        z-index: 1;
                        opacity: 0;
                        transition: opacity .2s linear;
                    }
                    &:hover::after {
                        opacity: 1;
                    }
                }
            }
            @media (max-width: @mobil-landscape) and (orientation: landscape) {
                &.active {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 11;
                    .nav_menu {
                        padding-left: 0;
                    }
                    .nav_list {
                        height: 100%;
                        align-items: flex-start;
                        overflow: hidden;
                        padding: 2rem 4rem;
                    }
                    .nav_content:nth-child(3) {
                        display: block;
                        position: absolute;
                        top: 20%;
                        left: 5%;
                        width: 90%;
                    }
                    .nav_menu_items {
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                    }
                    .nav_menu_item {
                        margin: 1rem 0;
                        width: 100%;
                        border-bottom: 0.3rem solid rgba(114, 79, 137, 0.5);
                    }
                }
            }
            @media (max-width: @mobil-sm-landscape) {
                &.active {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 11;
                    .nav_menu {
                        padding-left: 0;
                    }
                    .nav_list {
                        height: 100%;
                        align-items: flex-start;
                        overflow: hidden;
                        padding: 2rem;
                    }
                    .nav_content:nth-child(3) {
                        display: block;
                        position: absolute;
                        top: 25%;
                        left: 5%;
                        width: 90%;
                    }
                    .nav_menu_items {
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                    }
                    .nav_menu_item {
                        margin: 1rem 0;
                        width: 100%;
                        border-bottom: 0.3rem solid rgba(114, 79, 137, 0.5);
                    }
                }
            }
            @media (max-width: @mobil) {
                &.active {
                    .nav_content:nth-child(3) {
                        top: 20%;
                    }
                    .nav_list {
                        padding: 1.5rem;
                    }
                    .nav_menu_item {
                        border: 0.3rem solid rgba(114, 79, 137, 0.5);
                        text-align: center;
                    }
                }
            }
        }
    }

</style>