// 🔹 Primitive Data Types

// . String → Text
// "hello" , 'Sheryians'

// . Number → Any numeric value
// 3 , -99 , 3.14

// . Boolean → True or false
// true , false

// . Undefined → Variable declared but not assigned
// let x; → x is undefined

// . Null → Intentional empty value
// let x = null;

// . Symbol → Unique identifier (rarely used)

// . BigInt → Very large integers
// 123456789012345678901234567890n


// 🔹 Reference Data Types

// Object → { name: "Harsh", age: 26 }
// 28/06/2025, 15:10 Complete JS Course Syllabus

// 6/36

// Array → [10, 20, 30]
// Function → function greet() {}
// These are not copied directly, but by reference.



// 🔍 typeof Operator
// Used to check the data type of a value:

// typeof "Sheryians" // "string"
// typeof 99 // "number"
// typeof true // "boolean"
// typeof undefined // "undefined"
// typeof null // "object" ← known bug
// typeof [] // "object"
// typeof {} // "object"
// typeof function(){} // "function"

// Note: typeof null === "object" is a bug, but has existed since the early days of JS.



// 🔁 Type Coercion (Auto-Conversion)
// JavaScript auto-converts types in some operations:

// "5" + 1 // "51" → number converted to string
// "5" - 1 // 4 → string converted to number
// true + 1 // 2
// null + 1 // 1
// undefined + 1 // NaN


// 🚨 Loose vs Strict Equality
// == compares value with type conversion
// === compares value + type (no conversion)

// 5 == "5" // true
// 5 === "5" // false

// 🧪 NaN – Not a Number

// typeof NaN // "number"

// Even though it means “Not a Number”, NaN is actually of type number .
// This is because operations like 0 / 0 or parseInt("abc") still produce a numeric result —
// just an invalid one.



// 🔦 Truthy and Falsy Values
// Falsy values:
// false , 0 , "" , null , undefined , NaN
// Everything else is truthy, including:
// "0" , "false" , [] , {} , function(){}

// Example:

// if ("0") {
// console.log("Runs"); // "0" is a non-empty string = truthy
// }