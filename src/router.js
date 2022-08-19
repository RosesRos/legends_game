import { createRouter, createWebHashHistory } from "vue-router";

import cocoTree from './views/cocoTree.vue';
import cocoFour from './views/cocoFour.vue';

import HeaderVue from './components/header/Header.vue';

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            component: HeaderVue,
        },
        {
            path: '/cocoTree',
            component: cocoTree,
            children: [
                {
                  path: '/cocoTree/:id',
                  component: cocoTree,
                }
            ]
        },
        {
            path: '/cocoFour',
            component: cocoFour,
            children: [
                {
                  path: '/cocoFour/:id',
                  component: cocoFour,
                }
            ]
        }
    ]
});