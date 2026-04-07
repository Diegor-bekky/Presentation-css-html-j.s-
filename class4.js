let text = "";
for (let i = 0;
    i < 5;
    i++
){
    text += "The number is " + i + "<br>";
}

document.getElementById("loop").innerHTML = text;

//car name
const cars = ["BMW", "Toyota", "Lexus", "Ford", "Nord"];
let len = cars.length

let textt = "";
for(let j = 0;
    j < len;
    j++
) {
    textt += cars[j] + "<br>";
}
document.getElementById("demo").innerHTML= textt;

//Using Var
var newBoy = "";
var k = 5;
for (var k = 0;
    k < 10;
    k++
){
    newBoy += "The number is " + k + "<br>"
}
document.getElementById("ex1").innerHTML = newBoy;

//Combine loop  & if...else statement
var students = [['David', 80], ['Charles', 78], ['Thomas' , 86] ['Jackson', 71]];

var avgMarks = 0;

for (var l = 0;
    l < students.length;
    l ++
){
    avgMarks += students [1][1];
    var avg = (avgMarks / students.length);
}

document.getElementById("combo").innerHTML =
"Average grade: " + (avgMarks / students.length);

if (avg < 60) {
    document.getElementById("combo").innerHTML += "<br>Grade: F";
} else if (avg < 70) {
    document.getElementById("combo").innerHTML += "<br>Grade: D";
} else if (avg < 80) {
    document.getElementById("combo").innerHTML += "<br>Grade: C";
} else if (avg < 90) {
    document.getElementById("combo").innerHTML += "<br>Grade: B";
} else if (avg <=100) {
    document.getElementById("combo").innerHTML += "<br>Grade: A";
}

