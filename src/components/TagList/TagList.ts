import { Vue, Component } from "vue-property-decorator";

import Tag from "../../models/tag";

@Component
export default class TagList extends Vue {
  get tags(): Array<Tag> {
    return this.$store.state.tagModule.tags;
  }
}
