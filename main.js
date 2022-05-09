let mapp = document.querySelector("#mapp");
let loc = document.querySelector(".loc");
let mail = document.querySelector(".mail");
let tell = document.querySelector(".tell");

let locat = document.getElementById("locat");
locat.addEventListener("mouseenter", function () {
    loc.style.display = "flex";
})
locat.addEventListener("mouseleave", function () {
    loc.style.display = "none";
})

let email = document.getElementById("email");
email.addEventListener("mouseenter", function () {
    mail.style.display = "flex";
})
email.addEventListener("mouseleave", function () {
    mail.style.display = "none";
})

let tell1 = document.getElementById("tell");
tell1.addEventListener("mouseenter", function () {
    tell.style.display = "flex";
})
tell1.addEventListener("mouseleave", function () {
    tell.style.display = "none";
})