// Change to uppercase

const parag = document.querySelector("p");

const filterInput = document.getElementById("filterInput");
const filterBtn = document.getElementById("filterButton");
const filteredTxt = document.getElementById("filteredText");

function displayCats(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      parag.textContent += `${arr[i]}.`;
    } else {
      parag.textContent += `${arr[i]}, `;
    }
  }
}

function filterCats(cat){
    return cat.startsWith(filterInput.value);
}
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

displayCats(cats);

function showFilteredCats(){
    filteredTxt.textContent = cats.filter(filterCats).join(", ");
}

filterBtn.addEventListener("click", ()=>{
    showFilteredCats();
})