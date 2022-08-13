
export default class Todo {
  constructor(index, description, completed = true) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}
  export function updateChanges(event) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    const saveTodos = (elem) => localStorage.setItem('todos', JSON.stringify(elem));
    if (event.target.checked) {
      event.target.nextElementSibling.classList.add('checked');
      todos[event.target.id - 1].completed = true;
      saveTodos(todos);
      displayTodo();
    } else {
      event.target.nextElementSibling.classList.remove('checked');
      todos[event.target.id - 1].completed = false;
      saveTodos(todos);
      displayTodo();
    }
  };
  // clear all completed function.
  export function clearAllCompleted () {
    const saveTodos = (elem) => localStorage.setItem('todos', JSON.stringify(elem));
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    const uncompletedTasks = todos.filter((element) => element.completed !== true);
    const newTasks = uncompletedTasks.map((elem, index) => {
        elem.index = index + 1;
        return elem;
    });
    saveTodos(newTasks);
    window.location.reload();
};