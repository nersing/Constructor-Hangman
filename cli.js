//constructors and logic from words.js
var Word = require("./Word.js")
var inquirer = require("inquirer");

require('events').EventEmitter.prototype._maxListeners = 100;


var hangmanGame = function(){

var currentWord = new Word();
 console.log('The current word is: ')
 
 // currentWord.grabLetters()
 currentWord.showWord()
 
var userPrompt = function(){
	inquirer.prompt([
	{ 
	   type: "input",
 	   name: "letterGuessed",
 	   message: "Guess a Letter!"
 	   
	}

]).then(function(guess){
	
	currentWord.letterChecker(guess.letterGuessed)
	currentWord.showWord()

	currentWord.ifGameOver()
	if(currentWord.gameOver === false){
		userPrompt()

}else{
	hangmanGame()
}
 
  		
})
 

}
userPrompt()

} 


hangmanGame()
