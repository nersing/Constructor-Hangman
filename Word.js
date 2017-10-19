//require the letter.js file
var Hangmanletter = require ("./Hangmanletter.js");
var choices = ['snoopy', 'lucy']


var Word = function(word){
	this.word = word;
	this.choices = ['snoopy', 'lucy']
	this.letters = [];
	this.inWord = false;


	this.wordChosen = function(){
		var randomWord = choices[Math.floor(Math.random()*choices.length)];
		var spaceWord = "";
		for(var i = 0; i < randomWord.length; i++){
			spaceWord += ' _ ';
		}
		console.log(spaceWord)

	}

		//grabs letters, loops through them, and pushes them into the letter array
		this.grabLetters = function(){
			 	for(var i = 0; i < word.length; i++){
			       this.letters.push(new Hangmanletter(word[i]))
			     
		}
		  
	};


	//checks to see if the letter the user selected is found in the selected word
	this.letterChecker = function(userinput){
		for(var i = 0; i < userinput.length; i++)
		if(this.letters[i] === userinput){
			this.letters[i].wrongLetter = true;
		 } 
	}; //letterChecker

	// puts the word and letts in the terminal window if guessed
	this.showWord = function(){
		var stringWord = ' '
		for(var i = 0; i < this.letters.length; i++){
			stringWord += this.letters[i].showLetter();
		}
		return stringWord;
	}; //showWord



	//looks at the boolean(.inWord) 
	// this.wordFound = function(){
	// 	this.inWord = this.letters.every(function(chosenLetter){
	// 		return chosenLetter.wrongLetter;
	// 	});
	// 		return this.inWord;	

	// console.log(this.inWord)
// }; //wordFunction


};  //Word constructor  


module.exports = Word;

