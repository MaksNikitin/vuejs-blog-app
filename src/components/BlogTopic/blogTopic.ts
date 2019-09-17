import { Vue, Component } from "vue-property-decorator";

import Topic from "../../models/topic";
import BlogPost from "../BlogPost/BlogPost.vue";

@Component({
  components: {
    BlogPost,
  },
})
export default class BlogTopic extends Vue {
  characterLimit: number = 200;

  get selectedTopic(): Topic {
    const { topics, selectedTopic } = this.$store.state.topicModule;
    return topics[selectedTopic];
  }
}
