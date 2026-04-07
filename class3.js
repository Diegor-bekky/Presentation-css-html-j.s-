if(new Date().getHours() < 18) {
    document.getElementById("demo1").innerHTML = "Good day Bros!";
}
// example2
let age = 16;
let text = "You cannot drive young boy";

if(age >=18) {
    text = "You can drive"
}

document.getElementById("demo2").innerHTML = text;

// example 3
let aage =  16;
let country = "UAE";
let  txt = "You cannot drive"

if (country == "UAE") {
    if (aage >= 16) {
        text = "You can drive"
    }
}

document.getElementById("demo3").innerHTML = txt;

// using AND
if(country == "UAE" && age >=16) {
    txt = "You can drive";
}
document.getElementById("demo4").innerHTML = txt;


// ELSE STATEMENT
const hour = new Date().getHours();let greetings;

if (hour < 15) {
    greetings = "Good day";
} else {
    greetings = "Good evening";
}

document.getElementById("demo5").innerHTML = greetings;

// IF ... ELSE IF ...ELSE
const time = new Date().getHours();let greeting;

if (time <12) {
    greetings = "Good morning";
} else if (time > 18) {
    greetings = "Good day";
}else {
    greetings = "Good evening";
}

document.getElementById("demo6").innerHTML = greetings;

// SWITCH
let day;
let date = new Date().getDay();
let txtt = "Weekend"
switch(date){
    case 0:
        day = "Sunday";
    break;
    case 1:
        day = "Monday";
    break;
    case  2:
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
        default:
            txtt = "";
}
document.getElementById("demo7").innerHTML = "Today is " + day;

// 
let Ptt;
switch (new Date().getDay()){
    case 4:
    case 5:
        Ptt = "Soon it is weekend";
    break;
    default:
        Ptt = "Looking forward tto the weekend"
    break;
    case 0:
    case 5:
    case 6:
        Ptt = "It weekend";
}

document.getElementById("demo8").innerHTML = Ptt;


// TERNARY
let stature = 16
let group = (stature <18) ? "Minor" :  "Adult";

document.getElementById("demo9").innerHTML = group;

let price =10;
let isMember =  true;
let discount = isMember ? 0.2 : 0;
let total = 10 - (price * discount)

document.getElementById("demo10").innerHTML = "The total is " +  total;

