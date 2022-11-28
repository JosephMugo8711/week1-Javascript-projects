const form = document.getElementById("form")
const input = document.getElementById("speedDetect")
const message = document.getElementById("message")

//document.addEventLIstener("click", function(){
    //document.getElementById("bedan")
//})
//Attach an event handler to a document
form.addEventListener("submit", (event) =>{
    event.preventDefault();// Prevents reloading of page
    checkSpeed(input) // calling the checkSpeed function
});

function checkSpeed(input){
    console.log(input)
    console.log(input.value)
    const checkSpeed = input.value;

    let points;
    points = (checkSpeed - 70) / 5
//All text contained by an element and all its children that are for formating purposes only
    if(checkSpeed <= 70) {
        return message.textContent = 'OK'
    }else if (checkSpeed > 70 && checkSpeed < 130){
        return points
    }else if(points >= 12){
        return message.textContent = 'License suspended'
    }
}

//console.log(checkSpeed(150))