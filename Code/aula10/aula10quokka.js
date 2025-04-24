let str1 = "The quick brown fox jumps"; 

str1.length;

//let str = "If the facts don't fit the theory, change the facts.";
//let pos = str.indexOf("facts");

//let str = "If the facts don't fit the theory, change the facts.";
//let pos = str.lastIndexOf("facts",20);

//let colorstr = "Color red looks brighter than color blue.";
//let pos1 = colorstr.search("color");

//let str = "The quick brown fox jumps over the lazy dog.";
//let subStr = str.slice(0, 17);

/*
let str0 = "The quick brown fox jumps over the lazy dog.";
console.log(str0.slice(4, 9))

let str = "The quick brown fox jumps over the lazy dog.";
console.log(str.substring(4, 9));

let rpcstr = "Color red looks brighter than color blue.";
let result = rpcstr.replace("color", "paint");

let upperstr = "Hello World!";
upperstr.toLowerCase();
*/

/* Array
let colors = ["Red", "Green", "Blue"]; 
let person = ["John", "Wick", 32, 1.91, "male", true];
person[2]

let megasena = [11, 22, 33, 44, 55, 66];
megasena.megasena.length - 1
megasena[5] = 77;
megasena = [11, 22, 33, 44, 55, 77]; 
*/

//
let fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
 
// Iterates over array elements
for(let fruit of fruits) {    
    console.log(fruit + "<br>");
}

fruits.push("Watermelon");
fruits 

fruits.unshift("Kiwi");
fruits

fruits.pop();    
fruits

removed = fruits.splice( 0,4);