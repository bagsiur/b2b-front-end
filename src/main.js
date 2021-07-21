import { createApp } from 'vue'
import { setupI18n } from './i18n.js'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas);
//https://www.youtube.com/watch?v=RIjIkMcdoII
createApp(App)
    .use(setupI18n)
    .use(store)
    .use(router)
    .component("fa", FontAwesomeIcon)
    .mount('#app')
