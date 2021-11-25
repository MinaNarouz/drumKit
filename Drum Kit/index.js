let buttons = document.querySelectorAll(".drum").length;
let buttonText = "";

for (let i = 0; i < buttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // buttonText =  document.querySelectorAll(".drum")[i].innerHTML;
    buttonText =  this.innerHTML; 
    // the above line of code are same as above, word(this) means the item or value you are refering to in the even function.
        makeSound(buttonText);
        animateButton(buttonText);
});
}
    document.addEventListener("keydown", function(evt) {

        makeSound(evt.key); 
        animateButton(evt.key);
});

function makeSound (e){
    // for the below if else statments, we could have used Switch Case also and you know how to use with Switch, break and default
    if (e === "w"){
        const music = new Audio("sounds/tom-1.mp3");
        music.play();
    }else if (e === "a"){
        const music = new Audio("sounds/tom-2.mp3");
        music.play();
    } else if (e === "s"){
        const music = new Audio("sounds/tom-3.mp3");
        music.play();
    } else if (e === "d"){
        const music = new Audio("sounds/tom-4.mp3");
        music.play();
    } else if (e === "j"){
        const music = new Audio("sounds/snare.mp3");
        music.play();
    } else if (e === "k"){
        const music = new Audio("sounds/crash.mp3");
        music.play();
    } else if (e === "l"){
        const music = new Audio("sounds/kick-bass.mp3");
        music.play();
    }  
}

function animateButton (currentKey) {
    let activeKey = document.querySelector(`.${currentKey}`);
    activeKey.classList.add("pressed");

    setTimeout(function (){
        activeKey.classList.remove("pressed");
    }, 100);
}