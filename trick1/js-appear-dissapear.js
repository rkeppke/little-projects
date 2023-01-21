let clickCount = 0;

//makes sure page is loaded first to avoid problems
window.addEventListener("load", function(){

    //selects burron1 element and waits for the click event
    document.querySelector(".button1").addEventListener("click", function(){

        clickCount++; //updates how many times create button was pressed

        if (clickCount > 3)
        {
            //breaking point
            let text = document.createElement("div");
            text.innerHTML = "3 times is enough";
            text.classList.add("text");
            document.body.appendChild(text);
            this.style.display = "none"; // hides button
        }
        else {
        //creates new background
        let background = document.createElement("div"); //created div
        background.classList.add("background"); //added "background" class
        document.body.appendChild(background); //appends to body element

        //creates new button
        let disappearButton = document.createElement("button"); 
        disappearButton.classList.add("disappear-button");
        disappearButton.innerHTML = "make this box dissapear"; //creates button txt
        background.appendChild(disappearButton);

        this.style.display = "none"; // hiding the original button

        removeBox = function() {
            background.remove();
            disappearButton.remove();
            document.querySelector(".button1").style.display = "block";
          }
        
        disappearButton.addEventListener("click", removeBox);
        }
    });
});

