<template>
    <button>
        <slot :text="button"></slot>
    </button>
</template>

<script>
    export default {
        name: 'ButtonVue',
        props: {
            button: String
        }
    }
</script>

<style lang="less">

</style>