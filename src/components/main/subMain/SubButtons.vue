<template>
    <div v-if="showButtons" class="controls_block">
        <div class="controls_btn" v-for="data in datas" :key="data.id">
            <button-vue v-slot="{text}" :button="data.title">
                {{text}}
            </button-vue>
        </div>
    </div>
</template>

<script>
    import { Data } from '../DataMain';
    import ButtonVue from '@/components/subComponents/Button.vue';

    export default {
        name: 'SubButtons',
        props: {
            showButtons: Boolean,
        },
        data() {
            return {
                datas: Data
            }
        },
        components: {
            ButtonVue
        }
    }
</script>

<style lang="less">

</style>