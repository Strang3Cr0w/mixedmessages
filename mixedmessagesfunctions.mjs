//Imports the data object fron appData.js
import {data} from "./appData.mjs";

 //The below function first calculates the number of contributors and stores that number in the variable 'c'.
 //Then a rondom number is generated using the stored value in 'c' to choose who's jokes the program will be using.
const getFirstObj = () => {
    let firstObj;
    let c = 0;
    for (let i in data) {
        c += 1;
    }
    const randNum = Math.floor(Math.random() * c);
    switch (randNum) {
        case 0:
            firstObj = data["strang3cr0w"];
            break;
        case 1:
            firstObj = data["tmacchi"];
            break;
        case 2:
            firstObj = data["tr_h3x"];
            break;
        case 3:
            firstObj = data["boody"];
            break;
        case 4:
            firstObj = data["markorf1"];
            break;
        case 5:
            firstObj = data['emilyqlark'];
            break;
        default:
            console.log("wtf - how did this happen");
            break;
    }
    return firstObj;
};

//This function first calculates the number of jokes the contributor has within their list and stores that number into 'c'.
//Then it uses 'c' to generate a random number to decide which joke within that pool will be used.
function getJokeObj() {
    let jokeObj;
    let c = 0;
    for (let i in firstObj) {
        c += 1;
    }
    const randNum2 = Math.floor(Math.random() * c);
    jokeObj = firstObj[randNum2];
    return jokeObj;
};

//Global variables with firstObj storing the data property corresponding to the contributor selected by the random number generator.
//jokeObj stores the data property of the randomly selected joke that will be used from the contributor.
const firstObj = getFirstObj();
const jokeObj = getJokeObj();

//Used the .toString method to remove the square brackets and commas (found in arrays) from final return value.
const getThere = () => {
    return jokeObj.there.toString();
}

const getWho = () => {
    return jokeObj.who.toString();
}

//Now the strings are stored into two variables for easy manipulation.
const firstWord = getThere();
const secondWord = getWho();


/////////////////////////////////////
//      Front-end functions        //
/////////////////////////////////////


//Variables storing the element id's of the corresponding html buttons and the box that will display the response.
const knock = document.getElementById("knock");
const goAway = document.getElementById("go_away");
const responseBox = document.getElementById("response_box");
const response = document.getElementById("response");
responseBox.style.display = "none";

//The function that hides the buttons, reveals the response box, and displays the joke.
const knockKnockJoke = () =>{
    knock.style.display = "none";
    goAway.style.display = "none";
    responseBox.style.display = "block";
    response.innerHTML = "Knock, Knock<br>Who's there?<br>" + firstWord + "<br>" + firstWord + " who?<br>" + secondWord;
}

//The function that hides the buttons, reveals the response box, and displays a snarky response.
const goAwayResponse = () =>{
    knock.style.display = "none";
    goAway.style.display = "none";
    responseBox.style.display = "block";
    response.innerHTML = "Where are you going? No sense of humor...";
}

//The listener function that invokes the knock knock joke function
knock.onclick = knockKnockJoke;

<<<<<<< HEAD
//The listener function that invokes the snarky reponse function
goAway.onclick = goAwayResponse;
=======
goBack.onclick = goBackFunc();

startOver.onclick = resetPage();
>>>>>>> 9fb758b44d1f1f0facefd539837545a9c9087762
