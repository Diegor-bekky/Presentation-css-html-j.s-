// let number = 1;
// let output = "";

// do  {
//     let result = number * 1;

//     if (result % 2 === 0) {
//         output += number + " x 1 = " + result + " (Even)<br>";
//     }   else {
//         output += number + " x 1 = " + result + " (Odd)<br>";
//     }

//     number++;
// } while (number <= 15);

// document.getElementById("result").innerHTML = output;


let firstNumber = 1;
let output = "";

do {
    let secondNumber = 1;

    do {
        let result = firstNumber * secondNumber;

        // Conditional statement
        if (result % 2 === 0) {
            output += firstNumber + " × " + secondNumber + " = " + result + " (Even)<br>";
        } else {
            output += firstNumber + " × " + secondNumber + " = " + result + " (Odd)<br>";
        }

        secondNumber++;
    } while (secondNumber <= 15);

    output += "<br>"; // space after each table
    firstNumber++;
} while (firstNumber <= 15);

document.getElementById("result").innerHTML = output;
