import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { AnLoader } from '../../src/index'
import { AnToasts } from '../../src/index'
import { AnToast } from '../../src/index'

const app = createApp(App)
app.component('AnLoader', AnLoader)
app.component('AnToasts', AnToasts)
app.component('AnToast', AnToast)
app.use(router).mount('#app')
