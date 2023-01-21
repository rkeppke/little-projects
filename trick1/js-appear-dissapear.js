window.addEventListener("load", function(){

    document.querySelector(".button1").addEventListener("click", function(){
        let background = document.createElement("div"); //creates new bg element
        background.classList.add("background"); //creates class for element
        document.body.appendChild(background); //appends 

        let disappearButton = document.createElement("button");
        disappearButton.classList.add("disappear-button");
        disappearButton.innerHTML = "make this box dissapear";
        background.appendChild(disappearButton);

        this.style.display = "none"; // hiding the original button

        disappearButton.addEventListener("click", function(){
        background.remove();
        this.remove();
        document.querySelector(".button1").style.display = "block";
        });
    });
});