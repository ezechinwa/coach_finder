import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import 'vue-tailwind-elements/src/tailwind-forms.min.css';
import VueTailwindElements from 'vue-tailwind-elements';
import FancyGridVue from 'fancy-grid-vue';
import Vuetable from 'vuetable-2'
import TableLite from 'vue3-table-lite'




import Header from "@/components/menu/Header";
import rounded_search from "@/components/UIComponent/rounded_search";
import buttoni from "@/components/UIComponent/button_icon";



createApp(App)
    .component('pageHeader', Header)
    .component('roundedSearch',rounded_search)
    .component('buttoni',buttoni)
    .component("fancyGridVue",FancyGridVue)
    .component("vuetable",Vuetable)
    .component("TableLite",TableLite)
    .use(store)
    .use(router)
    .use(VueTailwindElements)
    .mount('#app')
