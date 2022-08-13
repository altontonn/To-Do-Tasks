export default class Todo {
  constructor(index, description, completed = false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}