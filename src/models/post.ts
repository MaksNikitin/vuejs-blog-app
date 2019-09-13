export default class Post {
  name: string;
  text: string;
  created: string;
  lastModified: string;

  constructor(
    name: string = '',
    text: string = '',
    created: string = '',
    lastModified: string = '',
  ) {
    this.name = name;
    this.text = text;
    this.created = created;
    this.lastModified = lastModified;
  }
}
