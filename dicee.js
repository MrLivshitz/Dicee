let randomNumber1=Math.floor(Math.random() * 6)+1;

let randomDicee="dice" + randomNumber1 +".png";

let randomSource="images/"+ randomDicee;

let image1=document.querySelectorAll("img")[0];

let randomNumber2=Math.floor(Math.random() * 6)+1;

let randomDicee2="dice" + randomNumber2 +".png";

let randomSource2="images/"+ randomDicee2;

let image2=document.querySelectorAll("img")[1];

image1.setAttribute("src",randomSource);

image2.setAttribute("src",randomSource2);

    if (randomDicee>randomDicee2) {
        document.querySelector("h1").textContent="🚩Player 1 Wins!"
    }
    else if (randomDicee<randomDicee2){
        document.querySelector("h1").textContent="Player 2 Wins!🚩"
    }

    else if (randomDicee==randomDicee2) {
        document.querySelector("h1").textContent="Draw!"
    }

