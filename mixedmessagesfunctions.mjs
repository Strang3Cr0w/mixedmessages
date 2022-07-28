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
        // add more cases for anyone else
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

// for testing purposes
console.log(firstWord)
console.log(secondWord)

/////////////////////////////////////
//      Front-end functions        //
/////////////////////////////////////

const goAway = document.getElementById("go_away");
const knock = document.getElementById("knock");
const startOver = document.getElementById("start_over");

const goAwayResponse = () =>{
    goAway.hidden = true;
    knock.hidden = true;
}

const knockKnockJoke = () =>{
    goAway.style.display = "block";
    reply.style.display = "none";
    goBack.style.display = "none";
}

const resetPage = () =>{
    goAway.hidden = false;
    knock.hidden = false;
}

goAway.onclick = goAwayResponse();

goBack.onclick = goBackFunc();

startOver.onclick = resetPage();
