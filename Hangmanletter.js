
// Creates hangman letters, uses a boolean, can display correct letter or _ if not

function Hangmanletter (letter){
	this.letter = letter; 
	this.guessed = false;
	this.showLetter = function (){
		if(this.guessed === false){
			return '_';
		}else{
			return this.letter
		}
	}
}



//testing to make sure constructor is working
// var l1 = new Hangmanletter("L", true)
// console.log(l1)

module.exports = Hangmanletter