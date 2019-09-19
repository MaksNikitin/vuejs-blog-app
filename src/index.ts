import { Vue } from "vue-property-decorator";
import VueScrollactive from 'vue-scrollactive';

import App from './components/App/app.vue';
import vuetify from './plugins/vuetify';
import store from './store';

Vue.use(VueScrollactive);

new Vue({
  render: h => h(App),
  components: { App },
  vuetify,
  store,
}).$mount('#app');
