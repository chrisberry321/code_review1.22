describe ('countUpTo', function(){
	it ("returns true for a number", function(){
		expect(countUpTo(30)).to.equal(true);
	});

	it ("if countUpTo is less than or equal to 0 expect it to return alert('HEY, try to get a little more posotive!')", function() {
		expect(countUpTo(-3)).to.equal(true);
	});
});

describe ('indexOutput', function(){

	it ("counts up to the number that the user inputs", function() {
		expect(indexOutput(2)).to.eql([1, 2]);
	});
	it("assigns ping to numbers that are divisible by three", function() {
		expect(indexOutput(3)).to.eql([1, 2, "ping"]);
	});
	it("assigns pong to numbers that are divisible by five", function() {
		expect(indexOutput(5)).to.eql([1, 2, "ping", 4, "pong"]);
	});
	it("assigns pingpong to numbers that are divisible by 15", function() {
		expect(indexOutput(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11,"ping", 13, 14, "pingpong"]);
	});
});
