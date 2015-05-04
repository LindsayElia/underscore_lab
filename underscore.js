// PUT YOUR CODE HERE!!!

var _ = {

	average : function (x) {
		var arrayLength = x.length;
		var total = 0;
		for (var i = (arrayLength - 1); i >= 0; i--) {
			total = total + x[i];
		}
		var avg = (total / arrayLength);
		return avg;
	}
	
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
	
	first : function (x) {
		var firstOfArray = x[0];
		return firstOfArray;
	}
	
	last : function (x) {
		var arrayLength = x.length;
		var lastPosition = (arrayLength - 1);
		var lastOfArray = x[lastPosition];
		return lastOfArray;
	}
	
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
	
	shuffle : function () {
//		...
	}
	
	sample : function () {
//		...
	}

// not working yet	
	difference : function (x,y) {
		var firstArray = x;
		var secondArray = y;
		var firstArrayLength = x.length;
		var secondArrayLength = y.length;
		var newArray = [];
		for (var n = 0; n <= (secondArrayLength - 1); n++){
			for (var i = 0; i <= (firstArrayLength - 1); i++) {
				var compareFirstNumber = firstArray[i];
				var compareSecondNumber = secondArray[n];
				if ( compareFirstNumber !== compareSecondNumber) {
						newArray.push(compareFirstNumber);
					}
				}
		}
		return newArray;
	}
	
	indexOf : function () {
//		...
	}
	
	pluck : function () {
//		...
	}
	
};

// test average function
// console.log(_.average([4,6,1,1]));

// test contains function
// console.log(_.contains([7,55,99], 99));

// test first function
// console.log(_.first([5, 4, 3, 2, 1]));

// test last function
// console.log(_.last([5, 4, 3, 2, 77]));

// test max function
// var numbers = [10, 5, 100, 2, 1000];
// console.log(_.max(numbers));


// test difference function
// console.log(_.difference([1, 2, 3, 4, 5], [5, 2, 10]));










