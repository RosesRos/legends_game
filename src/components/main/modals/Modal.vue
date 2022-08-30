<template>
    <Transition name="modal">
        <section class="section">
            <div v-if="show" class="modal">
                <div class="modal_inner">
                    <div class="modal_content">
                        <div class="modal_card" data-aos="zoom-in" ata-aos-offset="200" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out">
                            <div class="modal_header">
                                <slot name="modalHeader"></slot>
                            </div>
                            <div class="modal_body">
                                <slot name="modalBody"></slot>
                            </div> 
                            <div class="modal_footer">
                                <slot name="modalFooter">
                                    <ButtonVue class="modal_btn_primary" v-slot="{text}" button="Close" @click="$emit('close')">{{ text }}</ButtonVue>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Transition>
</template>

<script>
    import ButtonVue from '@/components/subComponents/Button';

    export default {
        name: 'ModalVue',
        props: {
            show: Boolean,
        },
        components: {
            ButtonVue
        }
    }
</script>

<style lang="less">
    @import '../../../styles/Main';

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        color: aliceblue;
        background-color: rgba(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(0.3rem) !important;
        z-index: 11;
        &-fade-enter-active {
            transition: all 0.3s ease-out;
        }
        &-fade-leave-active {
            transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
        }
        &-fade-enter-from, &-fade-leave-to {
            transform: translateX(2rem);
            opacity: 0;
        }
        &_inner {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
        &_content{
            width: 100%;
            border-radius: 2rem;
            padding: 2rem 15rem;
        }
        &_card {
            background-image: var(--headerBackground);
            border: 0.3rem solid rgba(204, 204, 204, 0.3);
            border-radius: 2rem;
            width: 100%;
            padding: 5rem 6rem;
        }
        &_header {
            margin: 2rem 0;
            padding: 2rem 0;
        }
        &_footer {
            margin: 2rem 0;
            padding: 2rem 0;
            text-align: center;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        &_btn {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            &_primary {
                max-width: 30rem;
                width: 100%;
                padding: 0.8rem 8rem;
                font-size: 2rem;
                .primary();
            }
        }
    }
</style>