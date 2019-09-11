import { Vue, Component } from "vue-property-decorator";

import Topic from "../../models/topic";

@Component
export default class BlogTopic extends Vue {
  mounted() {
    this.$store.dispatch('getTopics');
  }

  get topics(): Array<Topic> {
    return this.$store.state.topicModule.topics;
  }
}
