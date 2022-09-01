<template>
    <div class="nav_burger">
        <button class="nav_burger_items">
            <span class="nav_burger_item"></span>
            <span class="nav_burger_item"></span>
            <span class="nav_burger_item"></span>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'BurgerVue',
    }
</script>

<style lang="less">
    @import '../../styles/Main.less';

    .nav {
        &_burger {
            &_items {
                display: block;
                position: absolute;
                top: 2.5rem;
                left: 2rem;
                width: 3.5rem;
                height: 2.8rem;
                border: 0;
                background: transparent;
                padding: 0;
                z-index: 11;
                @media (max-width: @mobil-landscape) and (orientation: landscape) {
                    left: 5rem;
                }
                @media (max-width: @mobil) {
                    left: 3rem;
                }
            }
            &_item {
                display: block;
                width: 100%;
                height: 0.3rem;
                margin-bottom: 0.6rem;
                background-color: var(--textColorOne);
                border-radius: 2rem;
                transition: all .2s linear;
                &:nth-child(1) {
                    width: 80%;
                }
                &:nth-child(2) {
                    width: 100%;
                }
                &:nth-child(3) {
                    width: 60%;
                }
            }
        }
    }

</style>