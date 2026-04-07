let txt = "";

let i = 3;
while (i < 9) {
    txt += "The number is " + i + "<br>";
    i++;
}

document.getElementById("ex1").innerHTML = txt;

//do while
let text = "";
let j = 0;

do{cxzVdc
    text += "<br>The number is " + j;
    j++;
}
while (j < 10);

document.getElementById("ex2").innerHTML = text;

//combine if else & do while
let number = 1;
let output = "";

do {
    if (number % 2 === 0) {
        output  += number + " is Even <br>";
    } else {
        output += number + "is Odd <br>";
    }

    number++;
} while (number <= 25);

document.getElementById("result").innerHTML = output;