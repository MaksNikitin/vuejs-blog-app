import { Vue } from "vue-property-decorator";

import App from './components/App/App.vue';
import vuetify from './plugins/vuetify';

new Vue({
  render: h => h(App),
  components: { App },
  vuetify,
}).$mount('#app');
