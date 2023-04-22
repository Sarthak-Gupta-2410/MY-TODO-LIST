// selectors
const todoInput = document.querySelector(".todo-input") ;
const todoButton = document.querySelector(".todo-button") ;
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");



// event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("input", filterTodo);

// function

function addTodo(event){

    // prevent form from submiiting
    event.preventDefault();
    // create elements 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo'); // adding class to div

    // Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);  // append li into div 

    // create completed button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class = "fas fa-check"> </i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    
    // create trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"> </i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // now APPEND this to main li div " todoList"
    todoList.appendChild(todoDiv);
    // clear the value from the box
    todoInput.value = "";
}


function deleteCheck(e)  {
    const item = e.target;

   // Delete Todo
   if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    todo.classList.add("fall"); 
    todo.addEventListener("transitionend", function() {
        todo.remove();
     });
   }

   if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
   }

}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
                break;
            
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }

    });


}