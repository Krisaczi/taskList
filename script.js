const addForm = document.querySelector(".add");
const lists = document.querySelectorAll(".todos");
const crucial = document.querySelector(".level1");
const important = document.querySelector(".level2");
const canWait = document.querySelector(".level3");
const cru = document.querySelector("#crucial");
const imp = document.querySelector("#important");

const generateTemplate = (todo) => {
  const html = `

<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fa-solid fa-trash delete"></i>
</li>`;

  lists.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = addForm.add.value.trim();

  if (cru.checked) {
    crucial.append(todo);
  } else if (imp.checked) {
    important.append(todo);
  } else {
    canWait.append(todo);
  }
  addForm.reset();
});

lists.forEach((list) => {
  list.addEventListener("click", (e) => {
    if (e.target.tagName === "I") {
      e.target.parentElement.remove();
    }
    console.log(e.target.tagName);
  });
});
