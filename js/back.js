var h1 = document.querySelector("h1");
h1.style.color = "pink";
var body = document.querySelector("body");
var iscolor = false;
setInterval(function(){
    if (iscolor) {
        body.style.background = "white";
    } else {
        body.style.background = "#3498db";

    }
    iscolor = !iscolor;
}, 1000)
