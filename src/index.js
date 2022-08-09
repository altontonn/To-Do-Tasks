import './style.css';

const todo = [
  {
    index: 1,
    text: 'Mango',
    completed: [true, false],
  },
  {
    index: 2,
    text: 'Orange',
    completed: [true, false],
  },
  {
    index: 3,
    text: 'Lemon',
    completed: [true, false],
  },
];
document.querySelector('.list').innerHTML = todo.map((todos) => (
  `<li class="todo todo-task task-${todos.index}"><button class="toggle" title="Check!" alt="Check!" tabindex="0"></button> ${todos.text} <i class="vert-ellips fas fa-ellipsis-v"></i></li>
    `
)).join('');
