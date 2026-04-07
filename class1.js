document.getElementById("demo").innerHTML = "Hello World"

document.getElementById("demoo"). innerHTML= "<h2> A new Line </h2>" + "<br>" + "Good morning"

document.getElementById("demo1").innerText = "<h1>This is home </h1>" + "<br>" + "Good morning"

//document.write
document.write(5 + 3);

//window.alert
// window.alert("Hello, lets start")
// alert("Ordinary")

//console.log
console.log(10 + 25);

//Datatypes
let club = "Manchester United"
document.getElementById("ex1").innerHTML = club + " this is the best club in  the world"  + "<br>" + "Red Devils ❤️👺";

//number
let age = 20;
document.getElementById("ex2").innerText  = age;
"years  old";

//boolean
// let x = 10;
// document.getElementById("ex3").innerHTML = (x > 8);

let x = Boolean(false)
let y = new Boolean(false)

document.getElementById("ex4").innerHTML = (x == y);

//undefined
let user;
document.getElementById("ex5").innerText = " This is my name" + user;

//null
let response = null;
document.getElementById("ex6").innerHTML =" This is my name" +  response;

//Non-Primitive
//Object
let user1 = {
    name: "John",
    age: 20,
    eyeColor: "brown"
};
document.getElementById("obj").innerHTML = "His name is " + user1.name + " and he is " + user1.age + " years old with a unique " + user1.eyeColor + " eye Color"

//array
let fruits = [" Apple", " Banana", " Cherry", " Mango", " Pawpaw"];
document.getElementById("arr").innerText = fruits[3];