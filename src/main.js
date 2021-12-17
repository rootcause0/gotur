import {createApp} from 'vue'
import App from './App.vue'
import './index.css';
import './assets/tailwind.css'
import {BootstrapIconsPlugin} from 'bootstrap-icons-vue';


const app = createApp(App)
app.use(BootstrapIconsPlugin);
app.mount('#app');
