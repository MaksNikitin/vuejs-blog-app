import { Vue, Component, Prop } from "vue-property-decorator";

import Post from "../../models/post";

@Component
export default class ScrollNavigation extends Vue {
  @Prop(Array) readonly posts: Array<Post>;
}
