var BasicCard = function (front, back) {
	this.front = front;
	this.back = back;
	this.genFront = function(front) {
		console.log("Front side: " + front);
	};
	this.genBack = function(back) {
		console.log("Back side: " + back);
	}
};

module.exports = BasicCard;