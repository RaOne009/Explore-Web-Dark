var but = document.querySelector("button");
var par = document.querySelector("p");
but.addEventListener("Click", function(){
    par.textContent = "Someone has clicked the button!";
});
