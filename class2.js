let person = "John Doe", carName = "Volvo", price = 200;

document.getElementById("demo").innerHTML = person + " " + carName + " " + price;

const pi = 3.14 + 5;
document.getElementById("ex1").innerHTML ="The Value of pi is: " + pi

let pie ="3.142" + 5;
document.getElementById("ex2").innerHTML =  "The value of pie is: " + pie;

let text1 =  "What a very";
text1 += " nice day";
document.getElementById("ex3").innerHTML = text1;

let y = 10;
y += 5;
document.getElementById("ex4").innerHTML = y;


let x = 5;
document.getElementById("ex5").innerHTML = x < 5;

x++;
let z = x;
document.getElementById("ex6").innerHTML = z;

x--;
let p = x;
document.getElementById("ex7").innerHTML = p;


let _text1 ="20"
let _text2 = 5
let result = _text1 > _text2;
document.getElementById("demo1").innerHTML = result;
