let text = "";
let i = 0;
while (i < 10) {
    text += "The number is " + i + "<br>";
    i++

}

document.getElementById("ex1").innerHTML = text;

//do...while
let txt = "";
let k = 5;

do{
    txt += "<br> The number is "  + k;
    k++;
} while (k < 7);

document.getElementById("ex2").innerHTML = txt;

//function
function multiply(a, b){
    return a*b;
}

let result = multiply(4, 3);

document.getElementById("demo1").innerHTML = "The answer is: " + result;

//demo2
function add(c ,d){
    return c+ d;

}
let sum1 = add(5, 14);
let sum2 = add(50, 78);

document.getElementById("demo2").innerHTML = "the result are " + sum1 + " and " + sum2;


//demo3
function sayHi(){
    return " Hello Kind World!!!"
}
let greetings = sayHi();
document.getElementById("demo3").innerHTML = greetings;

//demo4
function fullName(firstName, lastName){
    return firstName + " " + lastName;
}

let Name = fullName("John", "Doe");

document.getElementById("demo4").innerHTML = "The name is " + name;

//Function Application
function calculate() {
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);

    let sum = number1 + number2;

    document.getElementById("result").innerHTML = "The answer is: " + sum;

}

function greetUser(){
    let  name = document.getElementById("username").value;

    document.getElementById("resultt").innerHTML = "Good day, " + name + " ! Welcome Back"
}

let count = 0;
function addToCart(){
    count++;
    document.getElementById("cart").innerHTML = count;
}

function darkMode(){
    let page = document.getElementById("page");

    if (page.style.backgroundColor === "black") {
        page.style.backgroundColor ="white";
        page.style.color  = "black";
    } else{
        page.style.backgroundColor = "black";
        page.style.color = "white"
    }

}