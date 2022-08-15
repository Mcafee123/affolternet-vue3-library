import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { AnLoader } from 'affolternet-vue3-library'
import { AnToasts } from 'affolternet-vue3-library'
import { AnToast } from 'affolternet-vue3-library'

const app = createApp(App)
app.component('AnLoader', AnLoader)
app.component('AnToasts', AnToasts)
app.component('AnToast', AnToast)
app.use(router).mount('#app')
