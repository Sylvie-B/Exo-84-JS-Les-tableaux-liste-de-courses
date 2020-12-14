// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :

let list = document.getElementById("listeCourse");

let newItem = document.createElement('li');

newItem.innerHTML = articles[0];
console.log(newItem);
list.appendChild(newItem);

