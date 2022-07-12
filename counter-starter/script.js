function add(numberToAdd) {
    // Get DOM element
    let counter = document.getElementById("number");
    
    // Add numberToAdd to the current value 
    let newValue = parseInt(counter.innerHTML) + numberToAdd 
    
    // Re-assign the value to the DOM element
    counter.innerHTML = newValue 
}

// console.log(typeof)

function subtract(numberToSubtract) {
    let counter = document.getElementById("number");
    let newValue = parseInt(counter.innerHTML) - numberToSubtract
    counter.innerHTML = newValue
}

function multiply(numberToMultiply) {
    let counter = document.getElementById("number");
    let newValue = parseInt(counter.innerHTML) * numberToMultiply
    counter.innerHTML = newValue
}

function divide(numberToDivide) {
    let counter = document.getElementById("number");
    let newValue = parseInt(counter.innerHTML) / numberToDivide
    counter.innerHTML = newValue
}

function yolo(){
    let inputField = document.getElementById('yolo');
    console.log('The Value: ', inputField.value)
    alert("Hello" + inputField.value)
};