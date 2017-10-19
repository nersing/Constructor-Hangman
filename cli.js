//constructors and logic from words.js
var Word = require("./Word.js")
var Hangmanletter = require("./Hangmanletter.js")
var inquirer = require("inquirer");

require('events').EventEmitter.prototype._maxListeners = 100;

var word1 = new Word();
// word1.letterChecker(this.userinput)

var guessesLeft = 10;



var hangmanGame = function(){

 console.log('The current word is: ')
  word1.wordChosen()

  guessesLeft = 10;



} //hangmanGame



var userPrompt = function(){
	inquirer.prompt([
	{ 
	   type: "input",
 	   name: "letterGuessed",
 	   message: "Guess a Letter!"
 	   
	}

]).then(function(guess){

  if(guess.name === word1.letterChecker(this.userinput)){
  	console.log("Correct")
  
  }else{
  	guessesLeft--;
  	console.log("Wrong" + guessesLeft)
  }




	// var found = word1.letterChecker()
	// if (found === 0){
	// 	guessesLeft--;
	// 	console.log("Gueses Left: " + guessesLeft)
	// 	console.log(showWord())
	// 	display();
	// }else{

	// }


// if(letter1 === parseInt(guess.letterGuessed)){
// 	console.log("In the word")
// 	display()
// }


})

} 
hangmanGame()
userPrompt()
