import Post from "./post";

export default class Topic {
  name: string;
  tags: Array<string>;
  posts: Array<Post>;

  constructor(
    name: string = '',
    tags: Array<string> = [],
    posts: Array<Post> = [],
  ) {
    this.name = name;
    this.tags = tags;
    this.posts = posts;
  }
}
