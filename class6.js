let text = "";
for (let i = 0;
    i < 10;
    i++
){
    if (i === 7) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("ex1").innerHTML = text;

//Switch break
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
 case 2:
        day = "Tuesday";
        break;
 case 3:
        day = "Wednesday";
        break;
 case 4:
        day = "Thursday";
        break;
 case 5:
        day = "Friday";
        break;
 case 6:
        day = "Saturday";
        break;
}
document.getElementById("ex2").innerHTML = "Today is " + day;

//Continue In Loop
let text2 = "";
for (let k = 0;
    k < 9;
    k++
){
    if (k === 3) {continue; }
    text2 += k*10 + "<br>";
}
document.getElementById("ex3").innerHTML = text2;

//STRING
let carName = "BMW";
let modelName = "Hybrid 7";

//Template String
let details =  `He's the owner of the lounge down there, his name is  "Diegor Blake"`;
document.getElementById("ex4").innerHTML = details;

//Lenght property
let str = "This is a good boy";
let n = str.length;
document.getElementById("ex5").innerHTML = n;

//Escape  Strings
let text3 = "We are the so-called \"Vikings\"from the north.";
document.getElementById("ex6").innerHTML = text3;

let text4 = 'it\'s a beautiful day';
document.getElementById("ex7").innerHTML = text4;

//Interpolation
let firstName = "John";
let lastName = "Doe";
let age = 34;
let text5 = `My name is ${firstName} ${lastName} and I am ${age} years old.`;
document.getElementById("ex8").innerHTML = text5;

//Expression String
let price = 10;
let Vat = 0.25;
let total = `Total: ${(price * (1 + Vat)).toFixed(2)}`;
document.getElementById("ex9").innerHTML = total;
