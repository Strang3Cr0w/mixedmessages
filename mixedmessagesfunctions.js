const {data} = require("./appData.js")

// PLZ UPDATE CODE ABOVE TO ES6 IMPORT SYNTAX BEFORE DEPLOYING CODE
// example: import {data} from "./appData.js";

// I left the functions together so that they're easier to review - We could seperate them into different modules later..

const getFirstObj = () => {
    let firstObj;
    let c = 0;
    for (let i in data) {
        c += 1;
    } // this is to get the length of the object (I might have overcomplicated it - lol)
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
        // add more cases for anyone else
        default:
            console.log("wtf - how did this happen");
            break;
    }
    return firstObj
    
};



function getJokeObj() {
    let jokeObj;
    let c = 0;
    for (let i in firstObj) {
        c += 1;
    }
    const randNum2 = Math.floor(Math.random() * c);
    jokeObj = firstObj[randNum2]
    return jokeObj
};


//Essential Global Variables:
const firstObj = getFirstObj();
const jokeObj = getJokeObj();



// used the .toString method to remove the square brackets and commas (found in arrays) from final return value
const getThere = () => {
    return jokeObj.there.toString()
}

const getWho = () => {
    return jokeObj.who.toString()
}

// Now we can get our Variable nouns... (Y'all can import these functions)
const firstWord = getThere();
const secondWord = getWho();

// for testing purposes
console.log(firstWord)
console.log(secondWord)

/////////////////////////////////////
//      Front-end functions        //
/////////////////////////////////////

// Edit this code so it fits in w/ what you guys called your HTML elements

// Ive used place holder ID names - your ID names may different,
// so plz feel free to change the ID names accordingly

// NOTE: this file needs pre-existing elements to work

const goAway = document.querySelector("#goAwayButton");
const reply = document.querySelector("#goAwayReply");
const goBack= document.querySelector("#goBackButton")

const goAwayResponse = ()=> {
    goAway.style.display = "none";
    reply.style.display = "block";
    goBack.style.display = "block";
}

const goBackFunc= ()=> {
    goAway.style.display = "block";
    reply.style.display = "none";
    goBack.style.display = "none";
}

goAway.onclick = goAwayResponse;

goBack.onclick = goBackFunc;
