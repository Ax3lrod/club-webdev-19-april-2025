// --- Function Declaration ---
sayHello(); // ✅ Berhasil karena hoisted

function sayHello() {
  console.log("Hello from Declaration");
}


// --- Function Expression ---
sayHi(); // ❌ Error: Cannot access 'sayHi' before initialization
const sayHi = function() {
  console.log("Hi from Expression");
};


// --- Arrow Function ---
sayHey(); // ❌ Error: Cannot access 'sayHey' before initialization

const sayHey = () => {
  console.log("Hey from Arrow");
};


// --- Perbedaan THIS ---
const obj = {
  name: "Satya",

  declaration: function() {
    console.log("Declaration this.name:", this.name);
  },

  arrow: () => {
    console.log("Arrow this.name:", this.name); // ⚠️ undefined or window.name
  }
};

obj.declaration(); // ✅ 'Satya' karena this mengacu ke obj
obj.arrow();       // ⚠️ undefined karena arrow tidak punya this sendiri
