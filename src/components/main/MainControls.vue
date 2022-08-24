<template>
    <div v-bind:class="{controls: control}">
        <div class="controls_inner">
            <div class="controls_block">
                <div class="controls_btn" v-for="data in datas" :key="data.id">
                    <button-vue :button="data.title"/>
                </div>
            </div>
            <div class="controls_block">
                <div class="controls_info">
                    <p>Last Order Platinum | to Diamond Iv.4</p>
                </div>
                <router-link to="support">
                    <button-vue class="controls_btn_primary" button="24/7 Support"/>
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
            cursor: pointer;
            background-color: rgba(225, 179, 239, 0.2);
            backdrop-filter: blur(15px);
            text-align: center;
            max-width: 20rem;
            width: 100%;
            border-radius: 5rem;
            font-family: @font_5;
            font-weight: 550;
            &:nth-child(1) {
                background-color: rgba(117, 59, 139, 0.6);
                backdrop-filter: blur(10px);
                border: none;
                &:hover {
                    backdrop-filter: none;
                    background-color: rgba(117, 59, 139, 1);
                }
            }
            &:hover {
                backdrop-filter: none;
                background-color: rgba(117, 59, 139, 1);
            }

            &_primary {
                padding: 0.4rem 4rem;
                max-width: 20rem;
                width: 100%;
                background-image: var(--btnBackground);
                border: none;
                border-radius: 5rem;
                font-size: 2rem;
                text-align: center;
                color: aliceblue;
                &:hover {
                    background-image: linear-gradient(90deg, #689DB2 0%,  #678ACC 100%);
                }
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