<template>
    <header class="header">
        <div class="header_inner">
            <header-vue/>
        </div>
    </header>
    <main class="main">
        <Main-vue/>
    </main>
    <footer>
        
    </footer>
</template>

<script>
    import HeaderVue from '@/components/header/Header';
    import MainVue from '@/components/main/Main.vue';

    export default {
        name: 'HomeVue',
        components: {
            HeaderVue,
            MainVue
        }
    }
</script>

<style lang="less">

</style>