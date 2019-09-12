import Vue from 'vue';
import Vuex from 'vuex';

import topicModule from './topicModule';
import drawerModule from './drawerModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    topicModule,
    drawerModule,
  },
});
