let todoTasksText = ["Walk Chilli", "Make Dinner"];
let todoTasksStatus = [false, true];

let todoList = document.getElementById("todo-list");

todoTasksText.forEach((task, index) => {
    let newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    if (todoTasksStatus[index] == true) {
        newTodoTaskTextElement.classList.add("complete");
    }
    let newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);
    
    let completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    };
    newTodoTaskElement.appendChild(completeButtonElement);
    todoList.appendChild(newTodoTaskElement);
});

function addTask() {}

function updateTodoList() {}

function createNewTodoItemElement(todoItem, index) {}

function toggleComplete(index) {
    if (todoTasksStatus[index] == false) {
        todoTasksStatus[index] = true;
    } else {todoTasksStatus[index] = false;
    }
    console.log(todoTasksStatus);
}




//Lachie's code:
let todoTasksText = ["Walk Chilli", "Make Dinner"];
let todoList = document.getElementById('todo-list')

for (let i = 0; i < todoTasksText.length; i++) {
  // Create: <p>Walk Chilli</p>
  let newTask = document.createElement('p')
  newTask.innerText = todoTasksText[i];

  // Append: <p>Walk Chilli</p>
  let newListItem = document.createElement("li");
  newListItem.appendChild(newTask);
  // <li><p>Walk Chilli</p></li>

  // Append List Item to Unordered List:
  /*
    <ul>
      <li>
        <p>Walk Chilli</p>
      </li>
    </ul>
  */
  todoList.appendChild(newListItem);
}
clap::skin-tone-2
partyparrot
rainbowcupcake












