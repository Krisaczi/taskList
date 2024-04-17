const addForm = document.querySelector(".add");
const lists = document.querySelectorAll(".todos");
const crucial = document.querySelector(".level1");
const important = document.querySelector(".level2");
const canWait = document.querySelector(".level3");
const cru = document.querySelector("#crucial");
const imp = document.querySelector("#important");

const generateTemplate = (todo) => {
  return `

<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fa-solid fa-trash delete"></i>
</li>`;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = addForm.add.value.trim();

  if (cru.checked) {
    crucial.insertAdjacentHTML("beforeend", generateTemplate(todo));
  } else if (imp.checked) {
    important.insertAdjacentHTML("beforeend", generateTemplate(todo));
  } else {
    canWait.insertAdjacentHTML("beforeend", generateTemplate(todo));
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
