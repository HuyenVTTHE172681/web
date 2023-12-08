function addNumber(a, b) {
    return a+b;
}

// arrow function
const addNumberFuction = (a,b) => a + b;

// loop
for(let i = 0; i <= 10; i++) {
    console.log("JS from with love");
}

let count = 0;
while(true) {
    console.log("Love HV");
    if(count == 0) {
        break;
    }
}

// array
const numbers = [1,2,3];
const numbers2 = [4,5,6];

console.log(numbers);

// destructuring array
const [a,b,c] = [2,3,4];
console.log(a,b);

// spread
const number3 = [...numbers];
console.log(number3);

// map, filter, reduce
const numbers4 = numbers2.map((element) => element*element)

console.log(numbers4);

// Query Selector || getDocumentById
const div1 = document.getElementById("div1");
console.log(div1.innerHTML);

const div2 = document.getElementById('div2');
div2.innerText = 'Vũ Thị Thu Huyền';

const h1 = '<h1>HV chăm học</h1>'
 
console.log(div2.innerText);

const h1_text = document.createElement('h1')
h1_text.textContent = 'Vũ Thị Thu Huyền 2'
div1.appendChild(h1_text);

console.log(div1.innerText);

const img_element = document.createElement("img");
img_element.src = "./img_test.jpeg";
div2.appendChild(img_element);
div2.removeChild(img_element);
console.log(img_element);

// function for events

function inputHandler() {
    console.log("Vu Thi Thu Huyen 3")
}

// function signInHandler() {
//     console.log("Vu Thi Thu Huyen 4");
// }

document.getElementById("signInBtn").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Hajimemasete")
});