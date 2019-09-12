import { Vue, Component } from "vue-property-decorator";

import Topic from "../../models/topic";

@Component
export default class BlogTopic extends Vue {
  get selectedTopic(): Topic {
    const { topics, selectedTopic } = this.$store.state.topicModule;
    return topics[selectedTopic];
  }
}
