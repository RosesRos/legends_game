import { createApp } from 'vue';
import App from './App.vue';

// Router Links
import { router } from './router';


// Animations Scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// Styles
import './styles/Main.less';

Aos.init();

const app = createApp(App).use(router);
app.mount('#app');

