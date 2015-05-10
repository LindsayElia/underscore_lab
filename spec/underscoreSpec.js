var callUnderscore = require("../underscore_part2.js")

describe("Underscore Library", function(){	
	
	it("should return true when given array [4,6,1,1]", function(){		
		expect(callUnderscore.average(1600)).toEqual(true)	
	});
	
	it("should return true when given 2000", function(){
		expect(callUnderscore.contains(2000)).toEqual(true)
	});
	
	it("should return false when given 1700", function(){
		expect(callUnderscore.first(1700)).toEqual(false)
	});
	
});