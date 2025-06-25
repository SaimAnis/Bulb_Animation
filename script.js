
let isOn = false;
function toggleBulb(){
const bulb = document.getElementById("bulb");
const button = document.querySelector("button");

if (isOn){
    bulb.src="https://www.w3schools.com/js/pic_bulboff.gif";
    button.textContent = "Turn On";
}
else{
     bulb.src="https://www.w3schools.com/js/pic_bulbon.gif";
    button.textContent = "Turn Off";
}
isOn = !isOn;


}