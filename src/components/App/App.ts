import { Vue, Component } from "vue-property-decorator";

import Topic from "../BlogTopic/blogTopic.vue";

@Component({
  components: {
    Topic,
  },
})
export default class App extends Vue {
}
