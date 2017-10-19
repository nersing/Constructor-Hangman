//require the letter.js file
var Hangmanletter = require ("./Hangmanletter.js");


var Word = function(){
	this.choices = ['snoopy', 'lucy', 'linus', 'woodstock'];

	this.randomWord = this.choices[Math.floor(Math.random()*this.choices.length)];

 	for(var i = 0; i < this.randomWord.length; i++){
		this[i] = new Hangmanletter(this.randomWord[i]);
	}

	//grabs letters, loops through them, and pushes them into the letter array
	this.showWord = function(){
		this.displayWord = []
		 for(var i = 0; i < this.randomWord.length; i++){
		  this.displayWord.push(this[i].showLetter())
		 }
		 console.log(this.displayWord.join(' '))

	};

	//checks to see if the letter the user selected is found in the selected word
	this.letterChecker = function(userinput){
		if(this.randomWord.includes(userinput)){
			for(var i = 0; i < this.randomWord.length; i++){
				if(userinput === this[i].letter){
					this[i].guessed = true;
					
				}
			}
		}
	}; //letterChecker


	this.ifGameOver = function(){
		if(this.displayWord.includes('_')){
				this.gameOver = false;
		}else{
			this.gameOver = true;
		}
	}

};  //Word constructor  


module.exports = Word;

