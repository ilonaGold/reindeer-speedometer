const speedometer = document.getElementById("speedometer");
const select = document.getElementById("select");
const time = document.getElementById("time");
const speedBtn = document.getElementById("speedBtn");
let currentLocation = "";
let timeTaken = 0;

let destinations = [
    {
        name: "Northpole",
        distanceFromPrevDestination: 3669
    },
    {
        name: "Munich",
        distanceFromPrevDestination: 2892
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324
    },
     {
        name: "Sydney",
        distanceFromPrevDestination: 5458
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729
    }
]

   
function calculateSpeed() {
    let speed = 0;    
    currentLocation = select.value;
    timeTaken = time.value;
    
    if (timeTaken > 0) {
        for(let destination of destinations){
            if(currentLocation === destination.name){
                let avgSpeed = Math.round(destination.distanceFromPrevDestination / timeTaken);
                speedometer.textContent = `To get ${currentLocation} in ${timeTaken} hours you must drive at ${avgSpeed} kph.`;
                }  
            }
        } else {
            alert("Please enter a valid number");
    }
}

speedBtn.addEventListener("click", calculateSpeed);

