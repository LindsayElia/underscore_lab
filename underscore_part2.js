// recreating the functions from the library underscore.js

var _ = {			// underscore, _ , is an object

// .............RESPONSES TO PART TWO.............
	
	// each - iterates over an array and calls a given function with each element
    each : function(arr, action) {			// this function declaration format works nested inside
											// of the _ object
		// noprotect  -->  I don't know how this works, 
		// but jsbin suggested including it to prevent an infinite loop
        for (var i = 0; i < arr.length; i++){
    	  		action(arr[i]);
    	  	}
  	}
	// to test
	// console.log(each([1,2,3,4,5], prompt));
	
	
	// this is a version that works inside of var _ = (function()..., although I'm not sure how
	// to get it to live as a method inside of the underscore object?
	//	var _ = (function() {
	//		return {
	//			each : function( arr, funk){      // funk is a blueprint for what I want my function to do
	//				for (var i = 0; i < arr.length; i++){
	//					funk(arr[i]); // each magic
	//				}
	//			}
	//		};
	//	})(); 		//self-executing function

	// to test
	// _.each([1,2,3,4,5], console.log());
	

	
	// compact - returns a new array with all provided undefined values removed
	compact : function(arr) {	
		newArray =[];
        for (var i = 0; i < arr.length; i++){
			if ((arr[i]) !== undefined){		// if item is not undefined
				newArray.push(arr[i]);			//	push item into newArray
			} 
		}
		return newArray;
	}
	
	
	
	// test compact function
	// console.log(_.compact([1, "hello", undefined, 3, undefined]));
	// => [1, "hello", 3]
	
	
	// map - returns a new array of values produced by running each element of an array through a given function
	map : function(compareToArr, action) {	
		newArray = [];
        for (var i = 0; i < arr.length; i++){
				newArray.push(action(arr[i]));
    	  	}
		return newArray;
	}
	
	// test map function
	// console.log(_.map([1, 2, 3], function(num){ return num * 3; }));
	// => [3, 6, 9]

	// _.map(["dogs", "before", "cats"], function(str){ return str.toUpperCase(); });
	// => ["DOGS", "BEFORE", "CATS"]
	
	
	
	// filter - Looks through each value in the list, returning an array of all the values that pass a truth test
	filter : function(arr, action) {	
		newArray = [];
        for (var i = 0; i < arr.length; i++){
			if ((arr[i]) === action(arr[i])){   // compare item in array to result of item passed through function
												// this is not working but the logic should be correct?
				newArray.push(arr[i]);
    	  	}
		}
		return newArray;
	}
	
	
	// test filter function
	// console.log(var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0;));
	// => [2, 4, 6]


// .............RESPONSES TO PART ONE.............

	average : function (x) {
		var arrayLength = x.length;
		var total = 0;
		for (var i = (arrayLength - 1); i >= 0; i--) {
			total = total + x[i];
		}
		var avg = (total / arrayLength);
		return avg;
	}
	// test average function
	// console.log(_.average([4,6,1,1]));
	
	contains : function (x,y) {
		var myArray = x;
		var entry = y;
		var arrayLength = x.length;
		var counter = 0;
		for (var i = (arrayLength - 1); i >= 0; i--) {
			if (entry === myArray[i]) {
				counter = counter + 1;
			}
		}
		if (counter > 0) {
			return true;
		} else {
			return false;
		}
	}
	// test contains function
	// console.log(_.contains([7,55,99], 99));
	
	first : function (x) {
		var firstOfArray = x[0];
		return firstOfArray;
	}
	// test first function
	// console.log(_.first([5, 4, 3, 2, 1]));
	
	last : function (x) {
		var arrayLength = x.length;
		var lastPosition = (arrayLength - 1);
		var lastOfArray = x[lastPosition];
		return lastOfArray;
	}
	// test last function
	// console.log(_.last([5, 4, 3, 2, 77]));
	
	max : function (x) {
		var myArray = x;
		var arrayLength = x.length;
		var maxItem = myArray[0];
		// console.log(maxItem);
		for (var i = 0; i <= (arrayLength - 1); i++) {
			if (myArray[i] >= maxItem) {
				maxItem = myArray[i];
				//	console.log(maxItem);
			} else {
				maxItem = maxItem;
			}
		}
		return maxItem;
	}
	// test max function
	// var numbers = [10, 5, 100, 2, 1000];
	// console.log(_.max(numbers));
	
	min : function (x) {
		var myArray = x;
		var arrayLength = x.length;
		var minItem = myArray[0];
		// console.log(minItem);
		for (var i = 0; i <= (arrayLength - 1); i++) {
			if (myArray[i] <= minItem) {
				minItem = myArray[i];
				// console.log(minItem);
			} else {
				minItem = minItem;
			}
		}
		return minItem;
	}
	
	shuffle : function (arr) {				// can re-order as simply as I want for this one
											// it is a really challenging one to do a "true" random shuffle
		for (var i = 0; i < 50; i++){		// pick a random number up to the length, any length will do
			var rand1 = Math.floor(Math.random() * arr.length);
			var rand2 = Math.floor(Math.random() * arr.length);
			var temp = arr[rand2];			// these 3 (here, blow) lines are how you do a swap!!!
			arr[rand2] = arr [rand1];		// swap, re-order from the new starting point
			arr[rand1] = temp;				// swap
		}
		return arr;
	}
	// test shuffle function
	// console.log(_.shuffle([1, 2, 3, 4, 5, 6]));
	// => [4, 1, 6, 3, 5, 2]
	
	sample : function (arr, num) {
		var rand;
        var result = []; 		// need to declare the empty array to hold the values from rand
		if (num) {	
			for (var i = 0; i < num; i++) {			// pick "num" random numbers
				rand = Math.floor(Math.random() * arr.length); 	// var rand = Math.random() --> this produces decimals, we want whole numbers, so we round down using floor. using round-up would push us above the last item in the array, which we don't want.
				result.push(arr[rand]);	// potential problem is if the random number is the same more than once
										// edge case: if num is 3 but arr only has 2 items inside of it
			}
			console.log(result);
		} else if (num === undefined){
			rand = Math.floor(Math.random() * arr.length);
			console.log(arr[rand]);
	    }
    }
	// test sample function
	// var myArray = [1,2,3,4,5,6,7,8,9];
	// console.log(_.sample(myArray, 3));
		
	// see also http://jsbin.com/fulenoreti/1/edit?js,console from class review of 'sample' function


// not working still...
	difference : function (arr1,arr2) {

		function contains(x,y) {
			var myArray = x;
			var entry = y;
			var arrayLength = x.length;
			var counter = 0;
			for (var i = (arrayLength - 1); i >= 0; i--) {
				if (entry === myArray[i]) {
					counter = counter + 1;
				}
			}
			if (counter > 0) {
				return true;
			} else {
				return false;
			}
		}();
		
		var newArray = [];
		for (var i = 0; i < arr1.length; i++){
			if (contains(arr2(arr1[i]))) {			// if 2nd array contains the value from the first array...
				newArray.push(arr1[i]);
			}		
		}
		return newArray;
	}
	// test difference function
	// console.log(_.difference([1, 2, 3, 4, 5], [5, 2, 10]));
	

// this is also still not working...
	indexOf : function (inputArray,inputValue) {
//		...
//	}
	
// from class review of indexOf:
//	function indexOf(inputArray, inputValue){
		for (var i=0; i < inputArray.length; i++){
			if(inputArray[i] === inputValue){
				console.log(i);
			}
		}
	}
	
	// test indexOf function
	// _.indexOf([1, 2, 3], 2);
	// => 1
	
//	pluck : function (list, inputKey) {
//		...
//	}
	

// from class review of pluck:
// REVIEW THIS!!!
	
	function pluck(list, inputKey) {			// this is the format from class. this format does not work with
												// the way I have underscore set up here, as an object?, when testing in jsbin.
	  var pluckArray = [];
	  for(var i=0; i < list.length; i++) {
	    pluckArray.push(list[i][inputKey]);
	  }
	  console.log(pluckArray);
	}

	// test of pluck function
	// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
	// console.log(_.pluck(stooges, 'name'));
	
	
}; 		// close out underscore, _ , object

