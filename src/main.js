import { createApp } from 'vue'
import App from './App.vue';

// Animations Scroll

import Aos from 'aos';
import 'aos/dist/aos.css';

// Styles

import './styles/Main.less';

Aos.init();

createApp(App).mount('#app')

