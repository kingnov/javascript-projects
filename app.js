// console.log("Hello Novic");
// console.log("I like burger");
// console.log("I love Chepngeno");
// console.log("I am Jose Mourinho");

// window.alert(`This is an alert!`);
// window.alert(`i like pizza!`);
// window.alert(`computer science fullcourse`);

// document.getElementById("myH1").textContent = `Hello, Novic here!`;
// document.getElementById("myP").textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
//     Velit consectetur harum ab accusantium nihil ratione natus ea vero, 
//     obcaecati sapiente saepe expedita suscipit voluptatum et maiores quia quas est sit.`;

// let x;
// y= 1500;
// x = y-1000;

// console.log(y);
// console.log(x);

// let greetings = "Hello";
// let firstName = "Novic";
// let age = 25;
// let price = 100.99;
// let gpa = 2.1;
// let favouriteFood= "burger";
// let email = "mmuliro59@gmail.com";
// let online = true;
// let isStudent = true;

// console.log(greetings);
// console.log(`Your name is ${firstName}`);
// console.log(`You are ${age} years old`);
// console.log(`Your favourite food is ${favouriteFood}`)
// console.log(`The Price is $${price}`);
// console.log(`Your gpa is: ${gpa}`);
// console.log(`Your email is ${email}`);
// console.log(`You are online: ${online}`);
// console.log(`Enrolled: ${isStudent}`);
// console.log(typeof age);
// console.log(typeof greetings);

// let fullName = "Novic Muliro";
// let age = 25;
// let favouriteFood = "burger"
// let isStudent = true;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Your favourite food is ${favouriteFood}`;
// document.getElementById("p4").textContent = `Enrolled: ${isStudent}`;

// Arithmetic Operators = operands (values, variables, etc)
//                       operators (+ - * /)
//                     ex. 11 = x + 5;

//let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//students = students % 2;
//students += 2;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;
//students++;


//console.log(students);

/* Operator Precedense
 1. parenthesis
 2. exponents
 3. multiplication & division & modulo
 4. addition & subtraction
 */

//  let result = 1 + 2 * 3 + 4 ** 2;
// let result = 6 / 2 ** (2 + 5);
// let result = 6 / 2 ** 7;

//  console.log(result);

// How to accept user input

// 1. EASY WAY = window prompt
// PROFESSIONAL WAY = HTML textbox

// let username;

// username = window.prompt("what's your username?");
// console.log(username);

// function askName() {
//     username = window.prompt("what's your username?")

//     console.log(username);
// }

// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`

//     console.log(username);
// }

//type conversion = change the datatype of a value to another
//                    (strings, numbers, booleans)

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1
// console.log(age);

// let x = "burger";
// let y = "burger";
// let z = "burger";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z)

// const = a variable that can't be changed

// const pi = 3.14159
// let radius;
// let circumference;

// radius = window.prompt("Enter radius of the circle");
// radius = Number(radius);

// circumference = 2 * pi * radius;
// console.log(circumference);

// giving functionality to our counter

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const counterlabel= document.getElementById("counterLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    counterlabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    counterlabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    counterlabel.textContent = count;
}









