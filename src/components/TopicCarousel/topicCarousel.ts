import { Vue, Component } from "vue-property-decorator";

import Topic from "../../models/topic";
import Post from "../../models/post";
import Tag from "../../models/tag";
import BlogTopic from "../BlogTopic/BlogTopic.vue";

@Component({
  components: {
    BlogTopic,
  },
})
export default class TopicCarousel extends Vue {
  mounted() {
    this.$store.dispatch('getTopics');
    this.$store.dispatch('getTags');
  }

  get topics(): Array<Topic> {
    return this.$store.state.topicModule.topics;
  }

  get selectedTopicIndex(): number {
    return this.$store.state.topicModule.selectedTopic;
  }

  get selectedTopic(): Topic {
    return this.topics[this.selectedTopicIndex];
  }

  get selectedTags(): Array<Tag> {
    return this.$store.state.tagModule.selectedTags;
  }

  get filteredPosts(): Array<Post> {
    return this.selectedTopic.posts.filter(p =>
      this.selectedTags.every(t =>
        p.tags.findIndex(tag => tag.name === t.name) >= 0));
  }

  changeSelectedTopic(index: number) {
    this.$store.dispatch('changeSelectedTopic', index);
  }
}
