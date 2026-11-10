// Change to uppercase

const parag = document.querySelector("p");
const up = document.getElementById("uppercase");
const low = document.getElementById("lowercase");
const reset = document.getElementById("reset");

function toUpper(arr) {
  return arr.toUpperCase();
}

function toLower(arr){
    return arr.toLowerCase();
}

function displayCats(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      parag.textContent += `${arr[i]}.`;
    } else {
      parag.textContent += `${arr[i]}, `;
    }
  }
}
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
displayCats(cats);

up.addEventListener("click", () => {
  parag.textContent = "";
  displayCats(cats.map(toUpper));
});

low.addEventListener("click", function(){
    parag.textContent = "";
    displayCats(cats.map(toLower));
})

reset.addEventListener("click", ()=>{
    parag.textContent = "";
    displayCats(cats);
})
