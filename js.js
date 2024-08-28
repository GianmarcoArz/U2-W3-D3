const form = document.querySelector("form");
const tasklist = document.querySelector("#elementitask ol");

form.onsubmit = function (event) {
  event.preventDefault();
  const newtask = document.querySelector("#newtask");
  const valortask = newtask.value;
  const li = document.createElement("li");

  li.innerText = valortask;
  li.onclick = function (event) {
    event.currentTarget.style.textDecoration = "line-through";
  };

  const delbutton = document.createElement("button");
  delbutton.innerText = "delete";
  delbutton.onclick = function (event) {
    event.currentTarget.parentNode.remove();
  };
  li.appendChild(delbutton);
  tasklist.appendChild(li);
  form.reset();
};
