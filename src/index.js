import {
  Todo, updateChanges, clearAllCompleted, displayTodo,
} from './module/todo.js';

import './style.css';

const tasks = document.querySelector('.task-items');

const refresh = document.querySelector('#refersh');

const clearAll = document.querySelector('#clear');

const addNewTask = document.querySelector('#new-item');
const enter = document.querySelector('#enter');
const enterKey = document.querySelector('#new-item');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

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

tasks.addEventListener('change', updateChanges);

// referesh on click refereshing button function.
refresh.addEventListener('click', () => {
  window.location.reload();
});

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
