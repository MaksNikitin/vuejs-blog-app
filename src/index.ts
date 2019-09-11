import { Vue } from "vue-property-decorator";

import App from './components/App/app.vue';
import vuetify from './plugins/vuetify';
import store from './store';

new Vue({
  render: h => h(App),
  components: { App },
  vuetify,
  store,
}).$mount('#app');
