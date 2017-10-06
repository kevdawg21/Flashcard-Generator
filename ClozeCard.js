var ClozeCard = function (front, back) {
	this.front = front;
	this.back = back;
	this.genPartial = function(front) {
		console.log("Partial Side: " + front);
	};
	this.genComplete = function(back) {
		console.log("Complete Side: " + back);
	}
};

module.exports = ClozeCard;