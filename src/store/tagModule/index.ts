import mutationTypes from './mutationTypes';
import Tag from '../../models/tag';

export default {
  state: {
    tags: new Array<Tag>(),
    selectedTags: new Array<Tag>(),
    isLoading: false,
    isFetchFailed: false,
  },

  mutations: {
    [mutationTypes.GET_TAGS_REQUEST](state) {
      state.tags = [];
      state.selectedTags = [];
      state.isLoading = true;
      state.isFetchFailed = false;
    },
    [mutationTypes.GET_TAGS_REQUEST_SUCCESS](state, tags: Array<string>) {
      state.tags = tags;
      state.isLoading = false;
    },
    [mutationTypes.GET_TAGS_REQUEST_FAILURE](state) {
      state.isLoading = false;
      state.isFetchFailed = true;
    },
    [mutationTypes.TOGGLE_ACTIVE_TAG](state, selectedTag: Tag) {
      const tagIndex = state.selectedTags.findIndex(t => t.name === selectedTag.name);

      if (tagIndex >= 0) {
        state.selectedTags.splice(tagIndex, 1);
      } else {
        state.selectedTags.push(selectedTag);
      }
    },
  },

  actions: {
    async getTags(context) {
      context.commit(mutationTypes.GET_TAGS_REQUEST);

      try {
        const response = await fetch('./data/tags-mock.json');
        const payload = await response.json();
        context.commit(mutationTypes.GET_TAGS_REQUEST_SUCCESS, payload);
      } catch (err) {
        context.commit(mutationTypes.GET_TAGS_REQUEST_FAILURE);
      }
    },
    toggleSelectedTag(context, selectedTag: Tag) {
      context.commit(mutationTypes.TOGGLE_ACTIVE_TAG, selectedTag);
    },
  },
};
