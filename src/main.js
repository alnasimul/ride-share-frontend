import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueGoogleMaps from 'vue-google-maps-community-fork'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCkcpoYI9sL8GGZegLBELUuikvBIKStCwo',
        libraries: 'places'
    }
})

app.mount('#app')