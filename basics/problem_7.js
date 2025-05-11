// The dice problem

/**
 * _Problem Statment:)-;
 * You are given a cubic dice with 6 faces.
 * All the individual faces have a number printed on them.
 * The numbers are in the range of 1 to 6, like any ordinary dice.
 * You will be provided with a face of this cube,
 * your task is to guess the number on the opposite face of the cube.
*/


function guessDiceCube(diceNumber) {

    if (diceNumber <= 0 || diceNumber > 6) {
        console.log("The Number should be form 1 to 6");
        return;
    }

    let j = 0;
    for (var i = 6; i >= diceNumber; i--) {
        j = j + 1;
    }

    console.log(j);
}

guessDiceCube(1);

/**
 * 🥴 
 * let n = 7 - number; ℹ Notice that as a foumulae
 * work same as the above function no deffernce
 * 
*/

