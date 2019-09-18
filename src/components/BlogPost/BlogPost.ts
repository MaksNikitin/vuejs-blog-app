import { Vue, Component, Prop } from "vue-property-decorator";
import moment from "moment";

import Post from "../../models/post";
import Tag from "../../models/tag";
import TagList from "../TagList/TagList.vue";

@Component({
  components: {
    TagList,
  },
})
export default class BlogPost extends Vue {
  @Prop(Object) readonly post: Post;
  @Prop(Array) readonly selectedTags: Array<Tag>;

  characterLimit: number = 200;
  isExpanded: boolean = false;

  getDateDiff(): string {
    const lastModified = moment(this.post.lastModified);
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

  showEditIcon() {
    const diff = moment.duration(moment(this.post.lastModified).diff(moment(this.post.created)));
    return diff.asSeconds() !== 0;
  }

  getTruncatedText() {
    return this.post.text.substring(0, this.characterLimit);
  }

  getRemainedText() {
    return this.post.text.substring(this.characterLimit);
  }

  expandText() {
    this.isExpanded = !this.isExpanded;
  }

  private addEndind(count: number) {
    return count !== 1 ? 's' : '';
  }
}
