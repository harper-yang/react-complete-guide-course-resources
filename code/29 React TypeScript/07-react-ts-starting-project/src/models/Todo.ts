export class Todo {
  id: number;
  text: string;

  constructor(text: string, id: number) {
    this.text = text;
    this.id = id;
  }
}
