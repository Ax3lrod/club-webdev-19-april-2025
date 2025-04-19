function hello() {
  var a = "Hello"; // Local variable
    console.log(a); // Output: Hello
}

//console.log(a);

if(true){
    let b = "Hello"; // Block scope
}

//console.log(b); // Output: ReferenceError: b is not defined

const nama = "Satya"; // Global scope

nama = "Fio";

console.log(nama); 