// Contoh deklarasi variabel var dengan function scope

// <--- Var --->

//console.log(n);// Output: undefined
//var n = "Hello World!"; // Global scope

// Var itu function scope tapi tidak block scope
function vartest() {
    var n = "Hello Satya"; // Function scope
    console.log(n); 
}

if (true) {
    var n = "Hello Satya 2";
}

//vartest();
console.log(n); // Output: Hello World!

// <--- Let --->

//console.log(m); // Output: ERROR
let m = "Hello World!";
//console.log(m); // Output: Hello World!

function lettest() {
    let m = "Hello Satya"; // Block scope
    console.log(m); 
}
//m = "Hello World!";
//console.log(m); // Output: Hello World!

// <--- Const --->

//console.log(o); // Output: ERROR
const o = "Hello World!"; // Global scope

function consttest() {
    const o = "Hello Satya"; // Block scope
    console.log(o); 
}

//consttest(); // Output: Hello Satya
o = "Hello Satya"; // Error: Assignment to constant variable
//console.log(o);

// declare variable tanpa keyword
function test() {
    x = 10; // Global scope
    console.log(x); 
}
//test(); // Output: 10