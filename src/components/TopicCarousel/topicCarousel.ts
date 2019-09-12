import { Vue, Component } from "vue-property-decorator";

import Topic from "../../models/topic";
import BlogTopic from "../BlogTopic/blogTopic.vue";

@Component({
  components: {
    BlogTopic,
  },
})
export default class TopicCarousel extends Vue {
  mounted() {
    this.$store.dispatch('getTopics');
  }

  get topics(): Array<Topic> {
    return this.$store.state.topicModule.topics;
  }

  get selectedTopic(): number {
    return this.$store.state.topicModule.selectedTopic;
  }

  changeSelectedTopic(index: number) {
    this.$store.dispatch('changeSelectedTopic', index);
  }
}
