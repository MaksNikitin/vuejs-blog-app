import { Vue, Component } from "vue-property-decorator";
import moment from "moment";

import Topic from "../../models/topic";

@Component
export default class BlogTopic extends Vue {
  get selectedTopic(): Topic {
    const { topics, selectedTopic } = this.$store.state.topicModule;
    return topics[selectedTopic];
  }

  getDateDiff(postIndex: number): string {
    const post = this.selectedTopic.posts[postIndex];
    const lastModified = moment(post.lastModified);
    const diff = moment.duration(moment().diff(lastModified));
    const diffHours = diff.asHours();

    if (diffHours > 24) {
      const days = Math.round(diff.asDays());
      return `${days} day${this.addEndind(days)} ago`;
    } else {
      if (diffHours < 1) {
        const minutes = Math.round(diff.asMinutes());
        return `${minutes} minute${this.addEndind(minutes)} ago`;
      }

      const hours = Math.round(diffHours);
      return `${hours} hour${this.addEndind(hours)} ago`;
    }
  }

  showEditIcon(postIndex: number) {
    const post = this.selectedTopic.posts[postIndex];
    const diff = moment.duration(moment(post.lastModified).diff(moment(post.created)));
    return diff.asSeconds() !== 0;
  }

  private addEndind(count: number) {
    return count !== 1 ? 's' : '';
  }
}
