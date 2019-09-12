import { Vue, Component } from "vue-property-decorator";

@Component
export default class AppNavigationBar extends Vue {
  toggleDrawer() {
    this.$store.dispatch('toggleDrawer');
  }
}
