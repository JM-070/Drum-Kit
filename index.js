
// Touch/click Event Listener
var drumCount = document.querySelectorAll(".drum").length;

for(var i=0; i < drumCount; i++){
    
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var innerHtml = this.innerHTML;
        playSound(innerHtml);
        buttonAnimation(innerHtml);
    });
}

// Keyboard Event listener

document.addEventListener("keydown", function (event){
    var characterPressed = event.key;
    playSound(characterPressed);
    buttonAnimation(characterPressed);
})

// Play the appropriate Sound
function playSound(key){

    switch(key){
        case "w":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var crash = new Audio('./sounds/kick-bass.mp3');
            crash.play();
            break;
        case "s":
            var crash = new Audio('./sounds/snare.mp3');
            crash.play();
            break;
        case "d":
            var crash = new Audio('./sounds/tom-1.mp3');
            crash.play();
            break;
        case "j":
            var crash = new Audio('./sounds/tom-2.mp3');
            crash.play();
            break;
        case "k":
            var crash = new Audio('./sounds/tom-3.mp3');
            crash.play();
            break;
        case "l":
            var crash = new Audio('./sounds/tom-4.mp3');
            crash.play();
            break;
    }

}

// Button Animations

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add('pressed');

    setTimeout(function (){
        activeButton.classList.remove('pressed');
    }, 100);
}