import { createRouter, createWebHashHistory } from "vue-router";

import HomeVue from './views/Home.vue';
import GamesVue from './views/Games.vue';
import LegalVue from './views/Legal.vue';
import PriceVue from './views/Price.vue';
import SupportVue from './views/Support.vue';


export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            component: HomeVue,
        },
        {
            path: '/games',
            component: GamesVue,
            children: [
                {
                  path: '/games/:id',
                  component: GamesVue,
                }
            ]
        },
        {
            path: '/legal',
            component: LegalVue,
            children: [
                {
                  path: '/legal/:id',
                  component: LegalVue,
                }
            ]
        },
        {
            path: '/price',
            component: PriceVue,
            children: [
                {
                  path: '/price/:id',
                  component: PriceVue,
                }
            ]
        },
        {
            path: '/support',
            component: SupportVue,
            children: [
                {
                  path: '/support/:id',
                  component: SupportVue,
                }
            ]
        }
    ]
});