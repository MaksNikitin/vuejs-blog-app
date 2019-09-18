import Post from "./post";

export default class Topic {
  name: string;
  posts: Array<Post>;

  constructor(
    name: string = '',
    posts: Array<Post> = [],
  ) {
    this.name = name;
    this.posts = posts;
  }
}
