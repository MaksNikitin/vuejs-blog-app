import mutationTypes from './mutationTypes';

export default {
  state: {
    isOpen: false,
  },

  mutations: {
    [mutationTypes.TOGGLE_DRAWER](state) {
      state.isOpen = !state.isOpen;
    },
  },

  actions: {
    toggleDrawer(context) {
      context.commit(mutationTypes.TOGGLE_DRAWER);
    },
  },
};
