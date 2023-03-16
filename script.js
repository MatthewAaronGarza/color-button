let colorButton = document.getElementById("color-button")

function changeColorButton () {
    //this var is a string that is a random color
    let randomColor = Math.floor(Math.random()*16777215).toString(16);

    //now we add the string to the background color property of the color button
    colorButton.style.backgroundColor = '#' + randomColor 

}

//now that we made the function we actually need to call it when we click on the color button, in this case it is a div.

colorButton.addEventListener('click', changeColorButton)
