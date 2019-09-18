import { Vue, Component } from "vue-property-decorator";

import Topic from "../../models/topic";
import Post from "../../models/post";
import Tag from "../../models/tag";
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

  get selectedTags(): Array<Tag> {
    return this.$store.state.tagModule.selectedTags;
  }

  get filteredPosts(): Array<Post> {
    return this.selectedTopic.posts.filter(p =>
      this.selectedTags.every(t =>
        p.tags.findIndex(tag => tag.name === t.name) >= 0));
  }
}
