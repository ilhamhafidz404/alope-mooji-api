require('./bootstrap');
import Vue from 'vue';
import VueNoty from 'vuejs-noty'
import router from './router/router.js';

Vue.use(VueNoty)
import 'vuejs-noty/dist/vuejs-noty.css'

Vue.component('nav-component', require('./components/nav.vue').default);

const app = new Vue({
    el: '#app',
    data(){
        return{
            name: 'Ilham'
        }
    },
    router,
});
