import { Vue, Component } from "vue-property-decorator";

import TopicCarousel from "../TopicCarousel/topicCarousel.vue";
import AppDrawer from "../AppDrawer/appDrawer.vue";
import AppNavigationBar from "../AppNavigationBar/appNavigationBar.vue";

@Component({
  components: {
    TopicCarousel,
    AppDrawer,
    AppNavigationBar,
  },
})
export default class App extends Vue {
}
