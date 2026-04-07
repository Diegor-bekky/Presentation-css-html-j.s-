let score = 60
let grade;

if (score >= 0 && score <= 30) {
    grade = "F";
} else if (score > 30 && score <= 40) {
    grade = "E";
} else if (score > 40 && score <= 50) {
    grade = "D";
} else if (score > 50 && score <= 60) {
    grade = "C";
} else if (score > 60 && score <= 70) {
    grade = "B";
} else if (score > 70 && score <= 100) {
    grade = "A";
} else {
    grade = "Invalid score";
}
document.getElementById("result").innerHTML = "Grade: " + grade;
