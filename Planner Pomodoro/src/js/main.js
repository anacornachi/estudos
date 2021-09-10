const input = document.querySelector("[data-priorities-input]");
const botao = document.querySelector("[data-priorities-button]");
const botaoDelete = document.querySelector("#delete-task");

class TodoList {
  constructor(selector) {
    this.todoList = document.querySelector(selector);
  }

  add(task) {
    this.todoList.innerHTML += `<li class="bg-white bg-opacity-30 h-24 flex justify-between rounded transform hover:scale-105 hover:shadow-sm w-full p-4">
    <h4 class="font-serif text-sm flex items-center align-middle w-4/5">${task}</h4>
    <div class="flex flex-col h-full items-center justify-center gap-3 w-1/5"><button class="text-green-700 rounded-full border border-green-700 hover:bg-green-700 hover:text-white h-10 w-10" title="Concluir tarefa">V</button><button delete-task class="text-primary__red rounded-full border border-red-700 hover:bg-red-700 hover:text-white h-10 w-10" title="Excluir tarefa">X</button></div></li>`;
    input.value = "";
  }
  delete(task) {
    todoList.removeChild(task);
  }
}

const todoList = new TodoList("[data-list]");

botao.addEventListener("click", (event) => {
  event.preventDefault();
  todoList.add(input.value);
});

botaoDelete.addEventListener("click", (event) => {
  event.preventDefault();
  todoList.delete(input.value);
});

// SEGUNDA PARTE DO CODIGO - POMODORO

const headerPomodoro = document.querySelector("[data-header-pomodoro]");
const now = new Date();

const weekDayName = [
  "Domingo",
  "Segunda feira",
  "Terça feira",
  "Quarta feira",
  "Quinta feira",
  "Sexta feira",
  "Sábado",
];

const localDate = now.toLocaleDateString();

headerPomodoro.innerHTML += `<p class="text-primary__red text-3xl font-serif h-full flex align-middle items-center leading-normal">${
  weekDayName[now.getDay()]
}, <br>${localDate}</p>`;
