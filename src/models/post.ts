import Tag from "./tag";

export default class Post {
  name: string;
  text: string;
  created: string;
  lastModified: string;
  tags: Array<Tag>;

  constructor(
    name: string = '',
    text: string = '',
    created: string = '',
    lastModified: string = '',
    tags: Array<Tag> = [],
  ) {
    this.name = name;
    this.text = text;
    this.created = created;
    this.lastModified = lastModified;
    this.tags = tags;
  }
}
