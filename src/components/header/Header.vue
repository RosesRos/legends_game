<template>
    <header>
        <nav class="nav">
            <div class="nav_list">
            <div class="nav_content">
                <LogoVue></LogoVue>
            </div>
            <div class="nav_content">
                <img src="" alt="">
            </div>
        </div>
    </nav>
    </header>
    <main>
        
    </main>
    <footer>
        
    </footer>
</template>

<script>
    import LogoVue from './Logo.vue';

    export default {
        name: 'HeaderVue',
        components: {
            LogoVue
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
            }
            &_content {
                display: flex;
                justify-content: space-between;
            }
        }
    }

</style>