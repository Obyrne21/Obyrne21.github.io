document.getElementById("firstbutton").onclick = function () {
    
    var name = prompt("Please enter your name");    
    
    document.getElementById("heading1").innerHTML = "Greetings";
    
    document.getElementById("paragraph1").innerHTML = "Hello " + name + ",  I hope you have fun viewing my website!";

};

document.getElementById("numberguess").onclick = function () {
    
    var number = prompt("Guess what my lucky number is");
    
    if (number == 21) {
        alert("Correct!!!");
    } 
    else {
        alert("Wrong!!!");
    }
    
};
              
