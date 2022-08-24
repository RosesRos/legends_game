<template>
    <div class="infos_head_btns">
        <button :class="{infos_head_btn: btns}">Platinum III <i class="btns_icon"></i></button>
        <span>=</span>
        <button :class="{infos_head_btn: btns}">Challenger V <i class="btns_icon"></i></button>
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
            &_btns {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-wrap: wrap;
            }
            &_btn {
                padding: 1rem 4rem;
                max-width: 30rem;
                width: 100%;
                background-color: rgba(225, 179, 239, 0.2);
                border: none;
                border-radius: 5rem;
                font-size: 2rem;
                text-align: center;
                // display: flex;
                // justify-content: space-between;
                // align-items: center;
                &:hover {
                    backdrop-filter: none;
                    background-color: rgba(117, 59, 139, 1);
                }
            }
        }
    }

    .btns {
        &_icon {
            background-image: url('../../../assets/img/arrow.svg');
            .bgImage();
            width: 2rem;
            height: 2rem;
            float: right;
            margin-top: 0.5rem;
        }
    }

</style>