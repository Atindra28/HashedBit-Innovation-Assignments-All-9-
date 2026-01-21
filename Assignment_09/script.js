//   1. var, let, const and their scope

function variableScopeExample() {
  var a = 10;     
  let b = 20;     
  const c = 30;   

  if (true) {
    var x = 1;    
    let y = 2;    
    const z = 3;  
  }

  console.log("var x:", x);     // works Correct
  // console.log(y);            // error
  // console.log(z);            // error
}


//   2. Array of fruits & return second fruit

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit() {
  return fruits[1];
}


//   3. Push and Pop from array

function addAndRemoveElement(arr) {
  arr.push("New Item"); // add element
  arr.pop();           // remove last element
  return arr;
}


//   4. Square numbers using map()

const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
  return arr.map(num => num * num);
}


//   5. Filter odd numbers using filter()

function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}


//   6. Person object & greeting message

const person = {
  name: "Atindra",
  age: 22,
  occupation: "Software Engineer"
};

function greetPerson(obj) {
  console.log(
    "Hello, my name is " + obj.name +
    ". I am " + obj.age +
    " years old and I work as a " + obj.occupation + "."
  );
}


//   7. Calculate area of rectangle

function calculateRectangleArea(rect) {
  return rect.width * rect.height;
}


//   8. Get object keys using Object.keys()

function getObjectKeys(obj) {
  return Object.keys(obj);
}


//   9. Merge two objects using Object.assign()

function mergeTwoObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}


//  10. Sum of array using reduce()

function sumOfNumbers(arr) {
  return arr.reduce((total, num) => total + num, 0);
}


// Calls

console.log("1. Variable Scope Example:");
variableScopeExample();

console.log("\n2. Second Fruit:");
console.log(getSecondFruit());

console.log("\n3. Push and Pop:");
console.log(addAndRemoveElement(["A", "B", "C"]));

console.log("\n4. Squared Numbers:");
console.log(squareNumbers(numbers));

console.log("\n5. Odd Numbers:");
console.log(getOddNumbers([1, 2, 3, 4, 5, 6]));

console.log("\n6. Greeting:");
greetPerson(person);

console.log("\n7. Rectangle Area:");
console.log(calculateRectangleArea({ width: 10, height: 5 }));

console.log("\n8. Object Keys:");
console.log(getObjectKeys({ name: "Alex", age: 25, city: "Delhi" }));

console.log("\n9. Merged Objects:");
console.log(mergeTwoObjects({ a: 1 }, { b: 2 }));

console.log("\n10. Sum of Numbers:");
console.log(sumOfNumbers([1, 2, 3, 4, 5]));
