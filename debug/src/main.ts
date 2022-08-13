import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { HelloWorld } from 'affolternet-vue3-library';
import { AnLoader } from 'affolternet-vue3-library';

const app = createApp(App)
app.component('AnLoader', AnLoader)
app.component('HelloWorld', HelloWorld)
app.use(router).mount('#app')
