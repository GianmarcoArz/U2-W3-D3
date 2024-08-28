const form = document.querySelector("form");
const areatask = document.querySelector("#elementitask");

const funzione = function () {
  const tasks = document.querySelector(".elementitask");
  tasks.forEach((task) => (task = alert("HAI CLICCATO IL TASK")));
};
form.onsubmit = function (event) {
  event.preventDefault();
  const newtask = document.querySelector("#newtask");
  const valortask = newtask.value;
  const aggtask = document.createElement("elementitask");

  aggtask.innerText = valortask;
  areatask.appendChild(aggtask);
  aggtask.addEventListener("click", funzione);
  form.reset;
};
