let menuToggle = document.getElementById("openSorter");
let menuElement = document.getElementById("sorterMenu");
function openSorter() {
  if (menuElement.style.display == "grid") {
    menuElement.style.display = "none";
  } else {
    menuElement.style.display = "grid";
  }
}
menuToggle.addEventListener("click", openSorter);
let orderSelected = document.getElementById("order");
let valueMenu = document.getElementById("selectValues");
function expandedMenu() {
  if (orderSelected.value == "values") {
    valueMenu.style.display = "block";
  } else {
    valueMenu.style.display = "none";
  }
}
orderSelected.addEventListener("change", expandedMenu);
