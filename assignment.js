//Q1

var message ="Hello World"
for(var i=0; i<5; i++){
console.log(message);
}

//Q2
for(var i=1; i<=10; i++){
    console.log(i);
    }

    //Q3

    var tableNumber = prompt("Enter the table number: ");
var length = prompt("Enter the length of the table: ");

for (var i = 1; i <= length; i++) {
  console.log(tableNumber + " * " + i + " = " + tableNumber * i);
}

//Q4
var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

for (var i = 0; i < A.length; i++) {
  console.log(A[i]);
}

//Q5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(var i=0; i<fruits.length;i++){
    console.log("Element at"+" index of "
    + [i]+" " + fruits[i]);
}
//Q6
var n = prompt("Enter the number of items: ");

var array = [];

for (var i = 0; i < n; i++) {
  array[i] = prompt("Enter item " + (i + 1) + ": ");
}

console.log(array);

//Q7

// a. Counting
console.log("a. Counting:");
for (let i = 1; i <= 15; i++) {
  console.log(i);
}

// b. Reverse counting
console.log("\nb. Reverse counting:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// C. Even
console.log("\nc. Even:");
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// D. Odd
console.log("\nd. Odd:");
for (let i = 1; i <= 19; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// E. Series
console.log("\ne. Series:");
for (let i = 2; i <= 20; i += 2) {
  console.log(i + "k");
}

//Q8
var A=["cake","cookie","chips","patties"];
var userinput=prompt("Enter a item: ");
for(var i=0; i<A.length;i++){
   if (A[i]===userinput){
       console.log(A[i]+" are found")
   } 
   else{
       console.log(A[i]+" are not found")
   }
}

//Q9

var num=[24,53,78,91,12];
var largestnumber=0
for(var i=0; i< num.length;i++){
    if(num[i] > largestnumber){
        largestnumber=num[i]
    }
}
alert(largestnumber)

//Q10
var A = [24, 53, 78, 91, 12];

var smallestNumber = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] < smallestNumber) {
    smallestNumber = A[i];
  }
}

console.log("The smallest number  is", smallestNumber);


//Q11
var A = [24, 53, 78, 91, 12];

var largestNumber = A[0];
var smallestNumber = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] > largestNumber) {
    largestNumber = A[i];
  } else if (A[i] < smallestNumber) {
    smallestNumber = A[i];
  }
}

console.log("The largest number  is", largestNumber);
console.log("The smallest number  is", smallestNumber);


//Q12
for(i=5;i<=100;i+=5){
    console.log(i)
}

//Q13
// not solved

//Q14

var scores = [12, 45, 3, 22, 34, 50];

var stopValue = prompt("Enter the stop value: ");

for (var i = 0; i < scores.length; i++) {
  if (scores[i] <= stopValue) {
    console.log(scores[i]);
  }
}


//Q15
var A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[i].length; j++) {
      console.log(A[i][j]);
    }
    console.log();
  }
//Q16
var num = prompt("Enter a number: ");

for (var i = num; i > 0; i -= 0.5) {
  console.log(i);
}

//Q17
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }

  
  //Q18

  var product = 1;

for (var i = 1; i <= 7; i++) {
    debugger
  if (i % 2 !== 0) {
    product *= i;
  }
}

console.log(product);

//q19

const initialStars = prompt("Enter the initial number of stars: ");
const numStars = (initialStars);

if ((numStars) && numStars >= 0) {
  for (var i = numStars; i >= 1; i--) {
    let stars = '';
    for (var j = 1; j <= i; j++) {
      stars += '*';
    }
    console.log(stars);
  }
} else {
  console.log("Please enter a valid positive number.");
}

//Q20

// not solved

