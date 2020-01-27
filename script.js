var length = prompt("Please choose your length of password!")
var cuppercase = alert("Do you like to use uppercase letters?");
var clowercase = alert("Do you like to use lowercase letters?");
var cnumbers = alert("Do you like to use numbers?");
var csymbols = alert("Do you like to use special characters?");



var char = ("0123456789!@#$%^&*()_+{}[];<>?/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

function generate() {
    var password = "";

    for (let index = 0; index <= 10; index++) {
        var c = Math.floor((Math.random() * char.length) + 0);
        password += char.charAt(c);

    }
    console.log(password);
    document.getElementById("card-body").innerHTML = `<h1>${password}</h1>`
}