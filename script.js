const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const paragElem = document.querySelector("p");

let myFavoriteCats = "My favorite big cats are ";

for(let i=0;i<cats.length;i++){
    if(i === cats.length -1){
        myFavoriteCats += `and ${cats[i]}.`; 
    }
    else{
        myFavoriteCats += `${cats[i]}, `;
    }
}

paragElem.textContent = myFavoriteCats;