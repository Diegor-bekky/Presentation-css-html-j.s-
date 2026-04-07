let cars = [
    "Saab", "Detour", "Volvo", "BMW"
]
document.getElementById("ex1").innerHTML = cars;

//empty Array
let fruits = [];
fruits[0] = "Cherry";
fruits[1] = "Pawpaw";
fruits[2] = "Lime";
fruits[3] = "Orange";
fruits[4] = "Banana";
fruits[5] = "Grape";
fruits[6] = "Mango";
document.getElementById("ex2").innerHTML = fruits;

//Element Change
fruits[3] = "Grape";
document.getElementById("ex3").innerHTML = fruits;

//Length  Property
let size = fruits.length;
document.getElementById("ex4").innerHTML = size;

//Push property
fruits.push("lemon");
document.getElementById("ex5").innerHTML = fruits;

//Join property
document.getElementById("ex6").innerHTML = fruits.join(" ~ ");

//Pop
fruits.pop();
document.getElementById("ex7").innerHTML = fruits;

//shift
fruits.shift()
document.getElementById("ex8").innerHTML = fruits;

//Unshift
fruits.unshift("WaterMelon");
document.getElementById("ex9").innerHTML = fruits;

//Concatinating
let girls = ["Jane", "Clara", "Leah"];
let boys = ["John", "Ken", "Leo"];

let  generalPeople = girls.concat(boys);

document.getElementById("ex10").innerHTML = generalPeople.join(",");

let animals = ["dog", "cat", "sheep"]
let container = boys.concat(animals, girls);
document.getElementById("ex11").innerHTML = container.join(",");











