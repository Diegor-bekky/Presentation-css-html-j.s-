function greetUser(){
    let name = document.getElementById
    ("username").value;

    document.getElementById("feedback").innerHTML = "Good Morning, " + name + ". How can i help you?";
}

//Login form
function validateForm(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === ""){
        document.getElementById("response").innerHTML = "All fields are required";
        return;
    }

    if (!email.includes("@")){
        document.getElementById("response").innerHTML = "Enter a valid email";
        return;
    }

    document.getElementById("response").innerHTML = "Login Succesful"
}

// Cart TOTAL 
function calTotal(){
    let item = document.getElementById("itemName").value;
    let price = Number(document.getElementById("price").value);
    let qty = Number(document.getElementById("qty").value);

    let total = price * qty;

    document.getElementById("cartResponse").innerHTML = "Item Name: "  + item + "<br>" + "Total: $" + total;

}

//Age Checker
function checkAGE(){
    let age = Number(document.getElementById("age").value);

    if (age >= 18) {
        document.getElementById("ageRes").innerHTML = "You're not Eligible";
        return;
    } else {
        document.getElementById("ageRes").innerHTML = "Ooops, you're not!";
    }
}

//character counter
function countCharacter(){
    let text = document.getElementById("message").value;
    document.getElementById("counter").innerHTML = text.length + " characters"
}