import Vue from 'vue';
import Vuex from 'vuex';

import topicModule from './topicModule';
import drawerModule from './drawerModule';
import tagModule from './tagModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    topicModule,
    drawerModule,
    tagModule,
  },
});
