<template>
    <div class="footer_content">
        <div class="container">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'FooterVue',
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
        }
        &_head {
            max-width: 10rem;
            width: 100%;
            margin-left: 5rem;
        }
        &_foot {
            max-width: 10rem;
            width: 100%;
            margin-right: 5rem;
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
            }
            &_link {
                position: relative;
                z-index: 10;
            }
        }
    }

</style>