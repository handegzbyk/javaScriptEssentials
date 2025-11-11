let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);
 let area = length * width;
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

// Practice Task
let amount_1;
let amount_2;
let amount_3;

function groceryTracker() {
    amount_1 = parseFloat(document.getElementById('amount_1').value);
    amount_2 = parseFloat(document.getElementById('amount_2').value);
    amount_3 = parseFloat(document.getElementById('amount_1').value);
    let total = amount_1 + amount_2 + amount_3;
    document.getElementById('result_2').innerText = `Total Amount of the Grocery: ${total}`;
}