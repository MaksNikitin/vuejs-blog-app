import { Vue, Component } from "vue-property-decorator";

@Component
export default class AppDrawer extends Vue {
  get isDrawerOpen() {
    return this.$store.state.drawerModule.isOpen;
  }
}
