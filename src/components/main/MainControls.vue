<template>
    <div v-bind:class="{controls: control}">
        <div class="controls_inner">
            <sub-buttons v-bind:showButtons="showButton"/>
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
    // import { Data } from './DataMain';
    import ButtonVue from '../subComponents/Button';
    import SubButtons from './subMain/SubButtons.vue';

    export default {
        name: 'MainControls',
        data() {
            return {
                control: true,
                showButton: false,
                // datas: Data
            }
        },
        methods: {
            onResize: function() {
                this.showButton = window.innerWidth >= 860;
            }
        },
        mounted() {
            window.addEventListener('resize', this.onResize);
            this.onResize();
        },
        unmounted() {
            window.removeEventListener('resize', this.onResize);
        },
        components: {
            ButtonVue,
            SubButtons
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
            gap: 1rem;
            @media (max-width: @tablet) {
                gap: 0.2rem;
            }
            @media (max-width: @mobil-sm-landscape) {
                gap: 1rem;
            }
        }
        &_btn {
            padding: 1rem 3rem;
            max-width: 20rem;
            width: 100%;
            font-family: @font_5;
            font-weight: 550;
            @media (max-width: @laptop) {
                padding: 1rem 2rem;
                max-width: 18rem;
            }
            @media (max-width: @mobil-landscape)and (orientation: landscape) {
                max-width: 15rem;
                font-size: 1.2rem;
            }
            @media (max-width: @mobil-sm-landscape) {
                max-width: 20rem;
            }
            @media (max-width: @mobil) {
                max-width: 100%;
            }
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
            &>button {
                @media (max-width: @mobil-landscape) and (orientation: landscape) {
                    cursor: none;
                }
                @media (max-width: @mobil-sm-landscape) {
                    cursor: none;
                }
            }

            &_primary {
                padding: 0.4rem 4rem;
                max-width: 20rem;
                width: 100%;
                font-size: 2rem;
                .primary();
                @media (max-width: @laptop) {
                    padding: 0.4rem 3rem;
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