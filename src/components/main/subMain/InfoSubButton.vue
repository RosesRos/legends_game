<template>
    <div class="infos_head_btns">
        <div class="infos_head_list">
            <p>Current League</p>
            <ButtonVue :class="{infos_head_btnOne: btns}" v-slot="{text}" button="Platinum III"> 
                {{text}} 
                <i class="btns_icon"></i>
            </ButtonVue>
        </div>
        <span class="infos_head_equ">=</span>
        <div class="infos_head_list">
            <p>Desired League</p>
            <ButtonVue :class="{infos_head_btnTwo: btns}" v-slot="{text}" button="Challenger V">
                {{text}} 
                <i class="btns_icon"></i>
            </ButtonVue>
        </div>
    </div>
</template>

<script>
    import ButtonVue from '@/components/subComponents/Button';


    export default {
        name: 'InfoSubButton',
        data() {
            return {
                btns: true
            }
        },
        components: {
            ButtonVue,
        }
        
    }
</script>

<style lang="less">
    @import url('../../../styles/Main');

    .infos {
        &_head {
            &_list {
                max-width: 25rem;
                width: 100%;
                @media (max-width: @mobil-sm-landscape) {
                    margin: 2rem;
                }
                @media (max-width: @tablet) {
                    margin: 2rem;
                }
                p {
                    color: gray;
                    font-size: 1.4rem;
                 }
            }
            &_btns {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-wrap: wrap;
            }
            &_btnOne {
                padding: 1rem 4rem;
                max-width: 25rem;
                width: 100%;
                font-size: 2rem;
                position: relative;
                .secondary();
                &::after {
                    display: block;
                    content: '';
                    background-image: url('../../../assets/img/cra1.png');
                    .bgImage();
                    width: 8rem;
                    height: 10rem;
                    position: absolute;
                    left: -3rem;
                    top: calc(50% - 5rem);
                    z-index: 5;
                    @media (max-width: 320px) {
                        width: 6rem;
                        height: 9rem;
                    }
                }
                &:hover {
                    backdrop-filter: none;
                    background-color: rgba(117, 59, 139, 1);
                }
                @media (max-width: @mobil-landscape) and (orientation: landscape) {
                    cursor: none;
                }
                @media (max-width: @mobil-sm-landscape) {
                    cursor: none;
                }
                @media (max-width: 320px) {
                    font-size: 1.6rem;
                }
            }
            &_btnTwo {
                padding: 1rem 4rem;
                max-width: 25rem;
                width: 100%;
                font-size: 2rem;
                position: relative;
                .secondary();
                &::after {
                    display: block;
                    content: '';
                    background-image: url('../../../assets/img/cra2.png');
                    .bgImage();
                    width: 8rem;
                    height: 10rem;
                    position: absolute;
                    left: -3rem;
                    top: calc(50% - 5rem);
                    z-index: 5;
                    @media (max-width: 320px) {
                        width: 6rem;
                        height: 9rem;
                    }
                }
                &:hover {
                    backdrop-filter: none;
                    background-color: rgba(117, 59, 139, 1);
                }
                @media (max-width: @mobil-landscape) and (orientation: landscape) {
                    cursor: none;
                }
                @media (max-width: @mobil-sm-landscape) {
                    cursor: none;
                }
                @media (max-width: 320px) {
                    font-size: 1.6rem;
                }
            }
            &_equ {
                font-size: 3rem;
                color: aliceblue;
                @media (max-width: @mobil-landscape)and (orientation: landscape) {
                    display: none;
                }
                @media (max-width: @mobil-sm-landscape) {
                    display: none;
                }
            }
        }
    }

    .btns {
        &_icon {
            background-image: url('../../../assets/img/arrow.svg');
            .bgImage();
            width: 1.6rem;
            height: 1.6rem;
            float: right;
            margin-top: 0.6rem;
            @media (max-width: 320px) {
                margin-left: 0.5rem;
                margin-top: 0.3rem;
            }
        }
    }

</style>