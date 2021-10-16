var welcome;
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
if (minute < 10) {
    minute = "0" + minute;
}
if (second < 10) {
    second = "0" + second;
}
if (hour < 12) {
    welcome = "Good Morning";
} else if (hour < 17) {
    welcome = "Good Afternoon";
} else {
    welcome = "Good Evening";
}
//  document.write("<h2>" + "<font color='red'>" + welcome + "</font>" + " welcome to our website");

document.getElementById("greeting").innerHTML = welcome + "!! " + "Welcome to My Website"





var typed = new Typed(".typingg", {
    strings: ["It's me Apil Subedi.", "  Tech Enthusiast.","Programmer made by COVID-19."],
    typeSpeed: 50,
    loop: true,
});






