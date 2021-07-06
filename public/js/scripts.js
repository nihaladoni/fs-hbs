const todoInput = document.getElementById("todos");
const todoSubmitButton = document.getElementById("todoSubmit");
todoSubmitButton.disabled = true;

const stateChange = () => {
  if (todoInput.value !== "") {
    todoSubmitButton.disabled = false;
  }
};

todoInput.addEventListener("change", stateChange);
