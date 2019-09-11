import mutationTypes from './mutationTypes';

import Topic from '../../models/topic';

export default {
  state: {
    topics: new Array<Topic>(),
    isLoading: false,
    isFetchFailed: false,
  },

  mutations: {
    [mutationTypes.GET_TOPICS_REQUEST](state) {
      state.topics = [];
      state.isLoading = true;
      state.isFetchFailed = false;
    },
    [mutationTypes.GET_TOPICS_REQUEST_SUCCESS](state, topics: Array<Topic>) {
      state.topics = topics;
      state.isLoading = false;
    },
    [mutationTypes.GET_TOPICS_REQUEST_FAILURE](state) {
      state.isLoading = false;
      state.isFetchFailed = true;
    },
  },

  actions: {
    async getTopics(context) {
      context.commit(mutationTypes.GET_TOPICS_REQUEST);

      try {
        const response = await fetch('./data/mock.json');
        const payload = await response.json();
        context.commit(mutationTypes.GET_TOPICS_REQUEST_SUCCESS, payload);
      } catch (err) {
        context.commit(mutationTypes.GET_TOPICS_REQUEST_FAILURE);
      }
    },
  },
};
