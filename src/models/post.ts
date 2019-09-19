import Tag from "./tag";

export default class Post {
  heading: string;
  text: string;
  created: string;
  lastModified: string;
  tags: Array<Tag>;

  constructor(
    heading: string = '',
    text: string = '',
    created: string = '',
    lastModified: string = '',
    tags: Array<Tag> = [],
  ) {
    this.heading = heading;
    this.text = text;
    this.created = created;
    this.lastModified = lastModified;
    this.tags = tags;
  }
}
