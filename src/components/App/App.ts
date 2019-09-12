import { Vue, Component } from "vue-property-decorator";

import TopicCarousel from "../TopicCarousel/TopicCarousel.vue";
import AppDrawer from "../AppDrawer/AppDrawer.vue";
import AppNavigationBar from "../AppNavigationBar/AppNavigationBar.vue";

@Component({
  components: {
    TopicCarousel,
    AppDrawer,
    AppNavigationBar,
  },
})
export default class App extends Vue {
}
