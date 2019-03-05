
function a() {
	console.log(this);
	this.newVar = 'hello';
}

var b = function() {
	console.log(this);
}

b();
a();
console.log(newVar);

var c = {

	name: 'The c object',
	log: function() {

		var that = this;
		this.name = 'updated c object';
		console.log(this.name);
		
		var setName = function(newName) {

			that.name = newName;
		}
		setName('Updated again! the c object');
		console.log(that);
	}
};
c.log();