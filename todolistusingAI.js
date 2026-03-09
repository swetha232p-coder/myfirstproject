// Add a new task
function addTodo() {
  let input = document.getElementById("todo-input");
  let task = input.value.trim();
  if (!task) return;

  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push({ text: task, completed: false });
  localStorage.setItem("todos", JSON.stringify(todos));

  input.value = "";
  displayTodos();
}

// Show all tasks
function displayTodos() {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo, i) => {
    let li = document.createElement("li");
    li.textContent = todo.text;
    if (todo.completed) li.classList.add("completed");

    // Toggle complete
    li.onclick = () => {
      todos[i].completed = !todos[i].completed;
      localStorage.setItem("todos", JSON.stringify(todos));
      displayTodos();
    };

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";
    delBtn.onclick = (e) => {
      e.stopPropagation(); // don’t toggle when deleting
      todos.splice(i, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      displayTodos();
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// Clear all tasks
function clearTodos() {
  localStorage.removeItem("todos");
  displayTodos();
}

// Run immediately
displayTodos();
