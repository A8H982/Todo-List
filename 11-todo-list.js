const todoList = [{
  name: 'Todo name will appear here!',
  dueDate: 'Date here'
}, {
  name: 'Add your tasks here!',
  dueDate: '2026-01-14'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;      // These both const are same as line:17
    // const dueDate = todoObject.dueDate;    
    const { name, dueDate } = todoObject;       // Destructuring
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

  // First check if the name is empty to prevent unnecessary adding empty todos
  // If the name is empty, don't add the todo
  // '' - means that there is not value in the string
  if (name === '') {

    // Show an alert to the user that they can't add empty todo
    alert("Can't add empty todo, Enter a todo name then try again!");

    // return - means that the function will do nothing after this line because user didn't add any todo
    return;
  } else {
    // If the name is not empty, add the todo
    todoList.push({
      name,
      dueDate
    });
    renderTodoList();
  }

  inputElement.value = '';
  dateInputElement.value = '';
  renderTodoList();
}