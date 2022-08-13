import Todo from './todo.js';
import './style.css';

const tasks = document.querySelector('.task-items');

const refresh = document.querySelector('#refersh');

const clearAll = document.querySelector('#clear');

const addNewTask = document.querySelector('#new-item');
const enter = document.querySelector('#enter');
const enterKey = document.querySelector('#new-item');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

// display tasks function.
const displayTodo = () => {
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
};

// save to local storage.
const saveTodos = (elem) => localStorage.setItem('todos', JSON.stringify(elem));

// delete task function.
const deleteTask = (e) => {
  if (e.target.classList.contains('fa-trash')) {
    e.target.parentElement.remove();
    const newTasks = todos.filter((elem) => +elem.index !== +e.target.parentElement.id);
    const updateTasks = newTasks.map((elem, index) => {
      elem.index = index + 1;
      return elem;
    });
    saveTodos(updateTasks);
    todos = updateTasks;
    displayTodo();
  }
};
tasks.addEventListener('click', deleteTask);

// editing task function.
const editing = (event) => {
  if (event.target.type === 'text' && event.key === 'Enter') {
    const targetedElem = event.target.parentElement.parentElement;
    todos.filter((e) => +e.index === +targetedElem.id);
    todos[targetedElem.id - 1].description = event.target.value;
    saveTodos(todos);
  }
};

tasks.addEventListener('keypress', editing);

// update on changing the checkbock function.
const updateChanges = (event) => {
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

tasks.addEventListener('change', updateChanges);

// referesh on click refereshing button function.
refresh.addEventListener('click', () => {
  window.location.reload();
});

// clear all completed function.
const clearAllCompleted = () => {
  const uncompletedTasks = todos.filter((element) => element.completed !== true);
  const newTasks = uncompletedTasks.map((elem, index) => {
    elem.index = index + 1;
    return elem;
  });
  saveTodos(newTasks);
  window.location.reload();
};

clearAll.addEventListener('click', () => clearAllCompleted());

// add new task function.
const addTask = () => {
  if (!addNewTask.value) return;
  const index = todos.length + 1;
  const description = addNewTask.value;
  let completed;
  todos = [...todos, new Todo(index, description, completed)];
  saveTodos(todos);
  displayTodo();
  addNewTask.value = '';
};

enter.addEventListener('click', () => addTask());
enterKey.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    addTask();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  displayTodo();
  addTask();
});
