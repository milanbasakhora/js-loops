const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const paragElem = document.querySelector("p");

let myFavoriteCats = "My favorite big cats are ";

for (const cat of cats){
    myFavoriteCats += `${cat}, `;
}

paragElem.textContent = myFavoriteCats;