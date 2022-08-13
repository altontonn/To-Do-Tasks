/* eslint max-classes-per-file: ["error", 3] */
import './style.css';
import Todo from './todo.js';

class UI {
  // UI
  static displayTodo = () => {
    const todos = Store.getTodos();
    todos.forEach((todo) => UI.addToList(todo));
  }

 static addToList = (todo) => {
   const list = document.querySelector('.do-list-1');
   const li = document.createElement('li');
   list.appendChild(li);
   li.classList.add('todo');
   li.innerHTML = '<input type="checkbox" class="li-check"> ' + `${todo.description}` + '<i class="trash fa fa-trash"></i><i class="vert-ellips fas fa-ellipsis-v"></i>';
   li.children[0].addEventListener('click', () => {
     li.classList.toggle('completed');
   });
   li.addEventListener('keypress', editing);
 }

  static deleteTask = (el) => {
    if (el.classList.contains('trash')) {
      el.parentElement.remove();
    }
  }

  static clearField = () => {
    document.querySelector('#myInput').value = '';
  }
}

// storage
class Store {
  static getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    return todos;
  }

  static addTodo(todo) {
    const todos = Store.getTodos();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  static deleteTodo(index) {
    const todos = Store.getTodos();
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  static UpdateMyIndex(index) {
    const lists = Store.getTodos();
    const removeList = lists.filter((item) => item.index !== index);
    const newID = [];
    removeList.forEach((el, i) => {
      el.index = i + 1;
      newID.push(el);
    });
    localStorage.setItem('lists', JSON.stringify(lists));
  }
}

const editing = (event) => {
  const todos = Store.getTodos();
};
// Event to display todo
document.addEventListener('DOMContentLoaded', UI.displayTodo);

// add a book

document.addEventListener('keypress', (event) => {
  const list = document.querySelector('#myInput').value;
  if (event.keyCode === 13 || event.which === 13) {
    const data = JSON.parse(localStorage.getItem('todos'));
    let index = 1;
    if (data) {
      index = data.length + 1;
    }
    if (list !== '') {
      // instatiate
      const newTask = {
        description: list,
        completed: false,
        index,
      };
      // const listItem = new Todo(list);
      UI.addToList(newTask);
      // add a book to storage
      Store.addTodo(newTask);

      UI.clearField();
      event.preventDefault();
    }
  }
});

// remove a book
document.querySelector('.do-list-1').addEventListener('click', (e) => {
  // remove book from UI
  UI.deleteTask(e.target);

  // remove book from Store
  Store.deleteTodo();
  Store.UpdateMyIndex();
});
