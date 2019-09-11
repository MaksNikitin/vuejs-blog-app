import Vue from 'vue';
import Vuex from 'vuex';

import topicModule from './topicModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    topicModule,
  },
});
