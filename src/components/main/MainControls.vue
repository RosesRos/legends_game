<template>
    <div v-bind:class="{controls: control}">
        <div class="controls_inner">
            <div class="controls_block">
                <div class="controls_btn" v-for="data in datas" :key="data.id">
                    <button-vue v-slot="{text}" :button="data.title">
                    {{text}}
                    </button-vue>
                </div>
            </div>
            <div class="controls_block">
                <div class="controls_info">
                    <p>Last Order Platinum | to Diamond Iv.4</p>
                </div>
                <router-link data-aos="zoom-out-left" data-aos-easing="linear" data-aos-duration="1500" to="support">
                    <button-vue class="controls_btn_primary" v-slot="{text}" button="24/7 Support">
                    {{text}}
                    </button-vue>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { Data } from './DataMain';
    import ButtonVue from '../subComponents/Button';

    export default {
        name: 'MainControls',
        data() {
            return {
                control: true,
                datas: Data
            }
        },
        components: {
            ButtonVue,
        }
    }
</script>

<style lang="less">
    @import url('../../styles/Main');

    .controls {
        overflow: hidden;
        &_block {
            padding: 0.5rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
        &_btn {
            padding: 1rem 3rem;
            max-width: 20rem;
            width: 100%;
            font-family: @font_5;
            font-weight: 550;
            .secondary();
            &:nth-child(1) {
                background-color: rgba(117, 59, 139, 0.6);
                backdrop-filter: blur(10px);
                border: none;
                transition: all .3s ease-in-out;
                &:hover {
                    backdrop-filter: none;
                    background-color: rgba(117, 59, 139, 1);
                }
            }

            &_primary {
                padding: 0.4rem 4rem;
                max-width: 20rem;
                width: 100%;
                font-size: 2rem;
                .primary();
            }
        }
        &_info {
            p {
                color: gray;
                font-size: 1.4rem;
            }
        }
    }

</style>