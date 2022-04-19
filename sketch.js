/*
This program will take letters as input from the keyboard
Once the users presses the Enter button, the letters entered will
be stored into a variable 'theirWord'
then the function 'checkForThisLetter' will be called.
Your task is to complete the function 'checkForLetter'
*/

theirWord=""
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  text(theirWord,50,50)
}

function keyReleased(){
  console.log(key)
  theirWord += key;
  if(keyCode == 13){
    //this function will search for the letter
    //that is in quotation marks.
    checkForThisLetter("e")
  }
}

function checkForThisLetter(target){
  /*Your work will go in this function
  this function receices a letter
  it will store the letter in the variable 'target'
  Your Task:
  make it so checkForThisLetter will print
  'true' to the console.log if 'target' is in the word
  'theirWord'
  and print false if the letter is not in the word.
  */
}
