import { createApp } from 'vue';
import App from './App.vue';

// Router Links
import { router } from './router';


// Animations Scroll
import AosInit from './AOS';

// Styles
import './styles/Main.less';

AosInit();


const app = createApp(App).use(router);
app.mount('#app');

