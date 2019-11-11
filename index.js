console.log("linked to html")

// GOAL OF EXERCISE
//on key event does 2 things
    //play sound associated with key
    //set off button animation 
        //make key slightly bigger
        //add border
// on key events
// playing audio
// listening for transition end


// PLAY SOUND FUNCTION
//function with event parameter(console.log(e.keycode)) to check key codes.
//audio variable equal to:
    //select audio element from html doc.
    //use attribute selector and es6 template strings to select key code.
//if theres no audio stop the function from running.
//set audio current time to 0 to stop sound and rewind if pressed multiple times.
//call audio.play function
// key variable equal to:
    // same as audio but select elements with key class.
    // add playing class to key
    // look up javascript classList


// REMOVE TRANSITION FUNCTION
// function to remove transition with event parameter
// if the event property is not transform skip function
// console log this
// remove playing class

// KEYS VARIABLE
// global variable for keys
// select all elements with the class of key

// CALL FUNCTION FOR EACH KEY
// call event listener function for on keys object to end transition.

// EVENT LISTENER KEYDOWN PLAYSOUND
// event listener on window object for keydown to call play sound function