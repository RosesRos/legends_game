<template>
    <slot name="main"></slot>
</template>

<script>
    export default {
        name: 'MainVue',
    }
</script>

<style lang="less">
    .section {
        overflow: hidden;
        &:nth-child(2) {
            margin-top: -1rem;
        }
    }
</style>