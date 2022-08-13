export class Todo {
  constructor(index, description, completed = true) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}

// display tasks function.
export function displayTodo() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const tasks = document.querySelector('.task-items');
  tasks.innerHTML = todos.map((todo) => ` 
      <div id="${todo.index}" class="task item">
        <div>
            <input id="${todo.index}" class="checkbox" type="checkbox" name="checkbox" ${!todo.completed ? '' : 'checked'} />
            <input id="task" type='text' class=" ${!todo.completed ? '' : 'checked'} " value="${todo.description}" />
        </div>
        <i id="ellips-btn" class="fa-solid fa-ellipsis-vertical ellips hidden"></i>
        <i id="trash" class="fa-solid fa-trash trash"></i>
    </div>
      `).join('');
}
export function updateChanges(event) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
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
}
// clear all completed function.
export function clearAllCompleted() {
  const saveTodos = (elem) => localStorage.setItem('todos', JSON.stringify(elem));
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const uncompletedTasks = todos.filter((element) => element.completed !== true);
  const newTasks = uncompletedTasks.map((elem, index) => {
    elem.index = index + 1;
    return elem;
  });
  saveTodos(newTasks);
  window.location.reload();
}
