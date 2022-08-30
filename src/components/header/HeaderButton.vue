<template>
    <div class="nav_control">
        <button-vue @click="activeModal" v-bind:class="{nav_control_btn: btn}" v-slot="slotProps" button="Members Login">
            <i class="nav_control_icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="25" height="25" viewBox="0 0 256 256" xml:space="preserve">
                    <defs></defs>
                    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                        <path d="M 45 90 c -15.663 0 -29.952 -8.61 -37.292 -22.472 l -0.496 -0.936 l 0.496 -0.936 c 4.178 -7.889 10.896 -14.376 18.918 -18.267 c 2.654 -1.286 5.752 -1.266 8.501 0.055 c 3.095 1.487 6.417 2.241 9.872 2.241 c 3.455 0 6.777 -0.754 9.872 -2.241 c 2.752 -1.321 5.85 -1.341 8.502 -0.055 c 8.022 3.891 14.74 10.378 18.917 18.267 l 0.495 0.936 l -0.495 0.936 C 74.952 81.39 60.663 90 45 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #9E3FD6; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        <path d="M 45 42.645 c -11.757 0 -21.323 -9.565 -21.323 -21.322 S 33.243 0 45 0 c 11.757 0 21.322 9.565 21.322 21.323 S 56.757 42.645 45 42.645 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #9E3FD6; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    </g>
                </svg>
            </i>
            {{slotProps.text}}
        </button-vue>
    </div>

    <Teleport to="body">
        <ModalVue :show="showModal" @close="activeModal">
            <template #modalHeader>
                <title-vue class="modal_title" title="League of Legends"></title-vue>
            </template>
            <template #modalBody>
                <h3>custon header</h3>
            </template>
        </ModalVue>
    </Teleport>
</template>

<script>
    import ButtonVue from '../subComponents/Button';
    import ModalVue from '../main/modals/Modal.vue';
    import TitleVue from '../subComponents/Title.vue';

    export default {
        name: 'HeaderButton',
        data() {
            return {
                btn: true,
                showModal: false,
            }
        },
        methods: {
            activeModal() {
                this.showModal = !this.showModal;
            }
        },
        components: {
            ButtonVue,
            ModalVue,
            TitleVue
        }
    }
</script>

<style lang="less">
    @import url('../../styles/Main');

    .nav {
        &_control {
            &_btn {
                padding: 0.8rem 3rem;
                background-color: rgba(117, 59, 139, 0.6);
                backdrop-filter: blur(10px);
                border: none;
                border-radius: 2rem;
                font-family: @font_5;
                display: flex;
                align-items: center;
                transition: all .3s ease-in-out;
                &:hover {
                    backdrop-filter: none;
                    background-color: rgba(117, 59, 139, 1);
                }
            }
            &_icon {
                width: 2.4rem;
                height: 2.4rem;
                margin-right: 0.8rem;
            }
        }
    }

    .modal {
        &_title {
          font-size: 6rem;
          line-height: 1;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          background-image: var(--textColorTwo);
          width: 100%;
        }
    }

</style>