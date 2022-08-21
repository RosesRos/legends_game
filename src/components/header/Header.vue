<template>
    <nav class="nav">
        <div class="nav_list">
            <div class="nav_content">
                <burger-vue />
            </div>
            <div class="nav_content">
                <LogoVue></LogoVue>
            </div>
            <div class="nav_content">
                <div class="nav_menu">
                    <ul class="nav_menu_items">
                        <li class="nav_menu_item" v-for="item in items" :key="item.id">
                            <router-link class="nav_menu_link" :to="item.rout">{{item.link}}</router-link>
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
                items: Data
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
        background-image: var(--headerBackground);
        .bgImage();
            &_list {
                padding: 2rem 6rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            &_content {
                display: flex;
                justify-content: space-between;
                &:nth-child(1) {
                    display: none;
                }
            }
            &_menu {
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
        }
    }

</style>