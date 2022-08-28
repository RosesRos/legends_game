<template>
    <nav class="nav">
        <div class="nav_list">
            <slot name="header"></slot>
        </div>
    </nav>
</template>

<script>    
    export default {
        name: 'HeaderVue',
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
            }
            &_content {
                display: flex;
                justify-content: space-between;
                &:nth-child(1) {
                    display: none;
                }
            }
            &_menu {
                padding-left: 10rem;
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