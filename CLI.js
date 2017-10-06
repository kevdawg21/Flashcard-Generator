var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
var inquirer = require('inquirer');
var basicQA = require('./basicQAs.js');
var clozeQA = require('./clozeQAs.js');


function selectType() {
	inquirer.prompt([
		{
			name: "select",
			message: "Welcome to the US Presidents Flashcard Generator. Which type of flashcard do you want?",
			type: "list",
			choices: [
				{
					name: "Basic"
				},
				{
					name: "Cloze"
				}
			]
		}
		]).then(function(answer) {
			if (answer.select === 'Basic') {
				createBasic();
			} else if (answer.select === 'Cloze') {
				createCloze();
			}
		});
};

var c = 0;

function createBasic() {
	var front = basicQA.frontSide[c];
	var back = basicQA.backSide[c];
	var newCard = new BasicCard();
	newCard.genFront(front);
	newCard.genBack(back);
	inquirer.prompt([
		{
			name: "proceed",
			message: "Choose abort or proceed with the next card",
			type: "list",
			choices: [
				{
					name: "Proceed with the next card"
				},
				{
					name: "Abort flashcard generation"
				}
			]
		}
		]).then(function(answer) {
			c++;
			if (c > 44) {
				console.log("All done! Thanks for using the Flashcard Generator!")
			} else {
				if (answer.proceed === "Abort flashcard generation") {
					console.log("ABORTED");
				} else if (answer.proceed === "Proceed with the next card") {
					createBasic();
				}
			}
		});
		
}

function createCloze() {
	var partial = clozeQA.partial[c];
	var complete = clozeQA.complete[c];
	var newCard = new ClozeCard();
	newCard.genPartial(partial);
	newCard.genComplete(complete);
	inquirer.prompt([
		{
			name: "proceed",
			message: "Choose abort or proceed with the next card",
			type: "list",
			choices: [
				{
					name: "Proceed with the next card"
				},
				{
					name: "Abort flashcard generation"
				}
			]
		}
		]).then(function(answer) {
			c++;
			if (c > 44) {
				console.log("All done! Thanks for using the Flashcard Generator!")
			} else {
				if (answer.proceed === "Abort flashcard generation") {
					console.log("ABORTED");
				} else if (answer.proceed === "Proceed with the next card") {
					createCloze();
				}
			}
		});
		
}

selectType();