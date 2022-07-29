let shoppingListItems = ["milk", "eggs", "bread"]
let shoppingList = document.getElementById("shopping-list-items");

shoppingListItems.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    shoppingList.appendChild(listItem);
});

// function addItem() { // Breakdown of how to do it
//     /*
//     1. Get the value of the input with the id of new-item-text
//     2. Create a list item with the value
//     3. call appendChild on the shopping list to add the list item
//     */
  
//     // 1. Get the value of the input with the id of new-item-text
//     let inputField = document.getElementById('new-item-text')
  
//     // 2. Create a list item with the value
//     // This is 'pesto'
//     let newShoppingItem = inputField.value
  
//     // This is <li></li>
//     let newListItem = document.createElement('li')
  
//     // This is <li>pesto</li>
//     newListItem.innerText = newShoppingItem
  
//     // 3. call appendChild on the shopping list to add the list item
//     shoppingList.appendChild(newListItem)
//   }


function addItem() {
    let inputField = document.getElementById("new-item-text");
    shoppingListItems.push(inputField.value);
    updateItems()
}

function updateItems() {
    let shoppingList = document.getElementById("shopping-list-items");
    shoppingList.innerHTML = "";
    shoppingListItems.forEach((item) => {
        let listItem = document.createElement("li");
        listItem.innerText = item;
        shoppingList.appendChild(listItem);
    });
}

function removeItem() {
    // let shoppingList = document.getElementById("shopping-list-items");
    // shoppingListItems = []
    // shoppingListItems.length = 0
    shoppingListItems.splice(0, shoppingListItems.length)
    console.log(shoppingListItems, typeof shoppingListItems)
    updateItems()
}