<template>
    <div class="infos_head_btns">
        <div class="infos_head_list">
            <p>Current League</p>
            <button :class="{infos_head_btnOne: btns}">Platinum III <i class="btns_icon"></i></button>
        </div>
        <span class="infos_head_equ">=</span>
        <div class="infos_head_list">
            <p>Desired League</p>
            <button :class="{infos_head_btnTwo: btns}">Challenger V <i class="btns_icon"></i></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InfoSubButton',
        data() {
            return {
                btns: true
            }
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
                }
                &:hover {
                    backdrop-filter: none;
                    background-color: rgba(117, 59, 139, 1);
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
                }
                &:hover {
                    backdrop-filter: none;
                    background-color: rgba(117, 59, 139, 1);
                }
            }
            &_equ {
                font-size: 3rem;
                color: aliceblue;
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
        }
    }

</style>