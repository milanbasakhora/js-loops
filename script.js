const contacts = [
  "Chris: 2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];

const parag = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  parag.textContent = "";
  input.focus();

  for (const contact of contacts) {
    // const [name, number] = contact.split(":");
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName){
        parag.textContent = `${splitContact[0]}'s number is ${splitContact[1]}`;
        break;
    }
  }
  if(parag.textContent === ""){
    parag.textContent = "Contact not found.";
  }
});
