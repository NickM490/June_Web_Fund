function custom() {
    // we can include more code here if we want to
    console.log("this message is coming from script.js");
}


function turtles() {
    console.log("Ninja Turtles Are The Best Turtles!")
}

var num = 0
function counter() {
    num += 1
    console.log(num)
}

function example(element) {
    console.log("This is just a string", element);
}



function turnOff(element) {
    element.innerText = "Logout";
}


function hide(element) {
    element.remove();
}

function counterHider() {
    
}



var myArray = [0,1,2,3,4,5]

function revArray(arr) {
    console.log(arr)
}

revArray(myArray)
