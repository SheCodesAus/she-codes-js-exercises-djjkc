// function showName(){
//     let inputField = document.getElementById('name-text');
//     console.log('The Value: ', inputField.value)
//     alert("Hello" + inputField.value)
// };

// ARRAYS
// for (let count = 0; count < 10; count++) {
//     console.log("Found count: ", count);
// }

let pets = ["Chilli", "Rex", "Roary", "Fleur", "Bella"];
//pets.push("Ivy"); //add name
//pets.pop("Rex") //remove name
// console.log(pets);
// console.log(pets[0]);
// console.log(pets[3]);

// console.log("Found pets: ", pets);

// for (let index = 0; index < pets.length; index++) {
//     console.log("Found Pet: ", pets [index]);
}

pets.forEach((pet) => {
    if (pet == 'Bella') {
        console.log('OMG Bella youre the best dog ever')
    } else if (pet == 'Chilli') {
        console.log("Chilli is pretty cool")
    } else {
        console.log("eh, you are alright")
    }
});

