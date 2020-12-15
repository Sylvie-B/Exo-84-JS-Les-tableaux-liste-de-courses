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

let list = document.getElementById("listeCourse");      // get list


// for each item of list
for (let i = 0 ; i < articles.length ; i++){
    //  create element li
    let item = document.createElement('li');
    item.innerHTML = articles[i];
    list.appendChild(item);
}

// create champ & button
document.getElementById('newItem').focus();
// add item on
document.getElementById('add').addEventListener('click', function (){
    let newItem = document.createElement('li');
    newItem.innerHTML = document.getElementById('newItem').value;
    list.appendChild(newItem);
    document.getElementById('newItem').value = "";
    document.getElementById('newItem').focus();
})

