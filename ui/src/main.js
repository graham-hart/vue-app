import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import { Auth0Plugin } from "./auth";
import { domain, clientId } from "../auth_config.json";
import titleMixin from "@/mixins/titleMixin.js";
import VueCompositionAPI from "@vue/composition-api";
Vue.config.productionTip = false;

axios.defaults.baseURL = "http://newsfacts.us:3000";
Vue.mixin(titleMixin);
Vue.use(VueCompositionAPI);
Vue.use(Auth0Plugin, {
    domain,
    clientId,
    redirectUri: "http://newsfacts.us/login-callback",
    onRedirectCallback: appState => {
        router.push(
            appState && appState.targetUrl ?
                appState.targetUrl :
                window.location.pathname
        );
    }
});
new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app');