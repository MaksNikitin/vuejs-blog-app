import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#FFFFFF',
        secondary: '#B2B6BB',
        accent: '#1976D2',
      },
      dark: {
        primary: colors.indigo.base,
        secondary: colors.indigo.lighten3,
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
