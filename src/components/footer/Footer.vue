<template>
    <div class="footer_content">
        <div class="container">
            <div class="footer_main">
                <div class="footer_head" data-aos="fade-right" data-aos-duration="4300" data-aos-easing="linear">
                    <img class="footer_logo" :src="Crack4" alt="Logo Footer">
                </div>
                <div class="footer_body">
                    <div class="footer_menu">
                        <ul class="footer_menu_items">
                            <li class="footer_menu_item" v-for="item in items" v-bind:key="item.id">
                                <router-link class="footer_menu_link" :to="item.rout">{{item.link}}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer_foot" data-aos="fade-left" data-aos-duration="4300" data-aos-easing="linear">
                    <img class="footer_logo" :src="Crack5" alt="Logo Footer">
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Data } from '../header/DataMenu';
    import Crack4 from '../../assets/img/cra4.png';
    import Crack5 from '../../assets/img/cra5.png';

    export default {
        name: 'FooterVue',
        data() {
            return {
                Crack4,
                Crack5,
                items: Data
            }
        }
    }
</script>

<style lang="less">

    @import url('../../styles/Main');

    .footer {
        overflow: hidden;
        &_content {
            font-family: @font_2;
            overflow: hidden;
            background-image: var(--headerBackground);
            .bgImage();
            border-top: 1px solid;
            border-image: linear-gradient(to right, #532b5f, #9E3FD6, #532b5f,) 47% 0%;
        }
        &_main {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            padding: 1rem 3rem;
            padding-bottom: 0;
            @media (max-width: @laptop) {
                padding: 1rem 1rem;
                padding-bottom: 0;
            }
        }
        &_head {
            max-width: 10rem;
            width: 100%;
            margin-left: 5rem;
            @media (max-width: @laptop) {
                margin-left: 2rem;
            }
            @media (max-width: @mobil-sm-landscape) {
                display: none;
            }
        }
        &_foot {
            max-width: 10rem;
            width: 100%;
            margin-right: 5rem;
            @media (max-width: @laptop) {
                margin-right: 2rem;
            }
            @media (max-width: @tablet) {
                display: none;
            }
            @media (max-width: @mobil-sm-landscape) {
                display: none;
            }
        }
        &_logo {
            width: 100%;
        }
        &_body {
            max-width: 40rem;
            width: 100%;
            margin: 0 auto;
        }
        &_menu {
            &_items {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 3rem;
            }
            &_item {
                font-size: 1.8rem;
                padding: 1rem 2rem;
                border: 0.3rem solid rgba(114, 79, 137, 0.5);
                max-width: 15rem;
                width: 100%;
                text-align: center;
                cursor: pointer;
                position: relative;
                overflow: hidden;
                transition: all .3s ease-in-out;
                &::before {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 0;
                    left: -5rem;
                    width: 0;
                    height: 100%;
                    backdrop-filter: none;
                    background-color: rgba(117, 59, 139, 1);
                    transform: skewX(45deg);
                    transition: width 1s ease-in-out;
                }
                &:hover::before {
                    width: 150%;
                }
                @media (max-width: @mobil-sm) {
                    max-width: 100%;
                }
            }
            &_link {
                position: relative;
                z-index: 10;
            }
        }
    }

</style>