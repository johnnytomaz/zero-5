import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Importe seu arquivo de rotas
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Importe os arquivos CSS do Bootstrap e BootstrapVue (ordem é importante)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Instale o plugin BootstrapVue
Vue.use(BootstrapVue);
// Opcionalmente instale o plugin de ícones do BootstrapVue
Vue.use(IconsPlugin);
// Algo que o próprio vue constrói, para validar e usar as portas do computador
import Vuelidate from "@vuelidate/core";
Vue.use(Vuelidate);

//importação do axios e configuração do vue-api-query com o axios
import axios from "axios";
import { Model } from "vue-api-query";
Model.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
render: h => h(App),
}).$mount('#app');