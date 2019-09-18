import { Vue, Component, Prop } from "vue-property-decorator";

import Tag from "../../models/tag";

@Component
export default class TagList extends Vue {
  @Prop(Array) readonly tags: Array<Tag>;
  @Prop(Array) readonly selectedTags: Array<Tag>;

  get activeTagIndexes() {
    return this.selectedTags.map(tag => this.tags.findIndex(t => t.name === tag.name));
  }

  toggleTag(event) {
    this.$store.dispatch('toggleSelectedTag', { name: event.target.innerText });
  }
}
