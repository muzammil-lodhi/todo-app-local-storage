

let form = document.getElementById("form");
let ulMain = document.getElementById("main-ul");

let savedItems = localStorage.getItem("li");
if (savedItems) {

    ulMain.innerHTML = JSON.parse(savedItems);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
 

  let inputValue = event.target[0].value;

  let li = document.createElement("li");
  li.textContent = inputValue;
  li.className = "todo-li";

  ulMain.appendChild(li);
  

  localStorage.setItem("li", JSON.stringify(ulMain.innerHTML));

  event.target[0].value = "";
});








































