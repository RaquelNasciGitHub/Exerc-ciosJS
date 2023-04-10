let product = [
    {name: "computador", category: "Eletrónicos", price: 800},
    {name: "telemóvel", category: "Eletrónicos", price: 500},
    {name: "Teclado", category: "Acessório", price: 80}
];

let myList= document.getElementById('productList');

for(i = 0; i < product.length; i++) {

    let product = products[i];

    let listItem = document.createElement("li");

    listItem.textContent = product.name + " (" + product.category + "): " + product.price + " €";

    myList.appendChild(listItem);
}