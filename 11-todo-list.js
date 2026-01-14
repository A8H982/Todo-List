const todoList = [{
  name: 'Welcome',
  dueDate: '2026-01-14'
}, {
  name: 'Add your tasks here!', 
  dueDate: '2026-01-14'}];

renderTodoList();

function renderTodoList () {
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      // const name = todoObject.name;      // These both const are same as line:17
      // const dueDate = todoObject.dueDate;    
      const {name, dueDate} = todoObject;       // Destructuring
      const html = ` 
        <div>${name}</div>
        <div>${dueDate}</div>                   
        <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        " class="delete-todo-button" >Delete</button>  
      `;           // ${todo} : Generating the HTML using JS
      todoListHTML += html;
  }
    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}
function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
      // name: name,
      // dueDate: dueDate
      name,                   // Shorthand property syntax
      dueDate
    });

    inputElement.value = '';
    dateInputElement.value = '';
    renderTodoList();
}