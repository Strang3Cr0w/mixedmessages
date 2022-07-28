//Imports the data object fron appData.js
//import data from "./appData.mjs";

const data = {
    'tmacchi': {
        0: {
            there: ['Nobel'],
            who: ["Nobel…that’s why I knocked!"]
        },
        1: {
            there: ['Tank'],
            who: ["You're welcome"]
        },
        2: {
            there: ['Luke'],
            who: ['Luke through the peep hole and find out.']
        },
        3: {
            there: ['Figs'],
            who: ["Figs the doorbell, it's not working!"]
        },
        4: {
            there: ['Annie'],
            who: ['Annie thing you can do, I can do too!']
        },
        5: {
            there: ['Cow says'],
            who: ['No, a cow says mooooo']
        },
        6: {
            there: ['Hal'],
            who: ["Hal will you know if you don’t open the door?"]
        },
        7: {
            there: ['Alice'],
            who: ["Alice fair in love and war."]
        },
        8: {
            there: ['Says'],
            who: ["Says me!"]
        },
        9: {
            there: ['Honey bee'],
            who: ["Honey bee a dear and get that for me please!"]
        }
    },
    'strang3cr0w': {
        0: {
            there: ["Solar"],
            who: ["Solar you going to think of a better joke?"]
        },
        1: {
            there: ["Marsbar"],
            who: ["Marsbar, astronauts chocolate bar of choice! Do you want to buy any?"]
        },
        2: {
            there: ["Luna-tick"],
            who: ["Luna-tick, a tick visiting from the moon!"]
        },
        3: {
            there: ["Planet"],
            who: ["Planet, here to help organize your moon mission"]
        },
        4: {
            there: ["Space"],
            who: ["Space, here to give you some space"]
        },
        5: {
            there: ["Parellel Universe"],
            who: ["Knock, Knock. Who's there? Parellel Universe. Parellel Universe who? Knock, Knock. Who's there? Parellel Universe. Parellel Universe who? Knock, Knock. Who's there? Parellel Universe. Parellel Universe who?..."]
        },
        6: {
            there: ["Cow"],
            who: ["Cow Moooooon"]
        },
        7: {
            there: ["Meteor"],
            who: ["Meteor Doom! Kaboom!"]
        },
        8: {
            there: ["Take me to your leader"],
            who: ["*Speaks telepathically* Listen here you little shit..."]
        },
        9: {
            there: ["Sun"],
            who: ["Sun, I am your father"]
        }
    },
    'trHex': {
        0: {
            there: ["Ahsoka"],
            who: ["Ahsoka my beans before I cook ’em"]
        },
        1: {
            there: ["Luke"],
            who: ["Luke out! Here comes another knock knock joke!"]
        },
        2: {
            there: ["Philip"],
            who: ["Please Philip my gas tank to full, I have a long ride ahead!"]
        },
        3: {
            there: ["Carl"],
            who: ["A Carl get you to the place faster than a motorcycle"]
        },
        4: {
            there: ["Yacht"],
            who: ["Yacht to know me by now!"]
        },
        5: {
            there: ["Ohms!"],
            who: ["Sherlock Ohms at your service!"]
        },
        6: {
            there: ["Doctor"],
            who: ["That's my favorite science fiction show, how did you know?"]
        },
        7: {
            there: ["Europe"],
            who: ["I AM NOT A POO! HOW DARE YOU."]
        },
        8: {
            there: ["THE PILOT!"],
            who: ["LET ME IN OR WE'RE ALL GONNA DIE!"]
        },
        9: {
            there: ["Tank"],
            who: ["You're welcome."]
        }
    },
    'markorf1': {
        0: {
            there: ["Wendy"],
            who: ["Wendy you think we can go on a date?"]
        },
        1: {
            there: ["Owl"],
            who: ["Owl be seeing you soon, right?"]
        },
        2: {
            there: ["Cheese"],
            who: ["Cheese a cute girl!"]
        },
        3: {
            there: ["Wire"],
            who: ["Wire you still not in my phone’s contacts list?"]
        },
        4: {
            there: ["Gopher"],
            who: ["Gopher me, obviously."]
        },
        5: {
            there: ["Police"],
            who: ["Police tell me I’m your type!"]
        },
        6: {
            there: ["Aherd"],
            who: ["Aherd you like girls who tell knock-knock jokes!"]
        },
        7: {
            there: ["Do-ya"],
            who: ["Do-ya want to be my girlfriend?"]
        },
        8: {
            there: ["Cook"],
            who: ["Cook for me!"]
        },
        9: {
            there: ["Norma Lee"],
            who: ["Norma Lee I don’t say this, but I think I’m hundry!"]
        }
    },
    'emilyqlark': {
        0: {
            there: ["Beets"],
            who: ["Beets me!"]
        },
        1: {
            there: ["Weekend"],
            who: ["Weekend do anything we want!"]
        },
        2: {
            there: ["Goat"],
            who: ["Goat to the door and find out!"]
        },
        3: {
            there: ["You"],
            who: ["Yoo-hoo! Anybody home?"]
        },
        4: {
            there: ["Butter"],
            who: ["Butter let me in or I'll freeze!"]
        },
        5: {
            there: ["Who"],
            who: ["What are you, an owl?"]
        },
        6: {
            there: ["Roach"],
            who: ["Roach you a letter, and I'm putting it in your mailbox!"]
        },
        7: {
            there: ["Leash"],
            who: ["Leash you could do is answer the doorbell!"]
        },
        8: {
            there: ["Abby"],
            who: ["Abby birthday to you!"]
        },
        9: {
            there: ["Radio"],
            who: ["Radio not, here I come!"]
        }
    },
    'boody': {
        0: {there: ["Joe"],
            who: ["Joe MAMA!"]
        },
        1: {there: ["mom"],
            who: ["DOIN' YOUR MOM!"]
            // if you know, you know
        },
        2: {there: ["Ligma"],
            who: ["Did you really fall for that?"]
        },
    }
};




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
knock.addEventListener("click", knockKnockJoke);
//The listener function that invokes the snarky reponse function
goAway.addEventListener("click", goAwayResponse);