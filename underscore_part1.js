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
		}/**
 * @OnlyCurrentDoc
 */

var FOLDER_ID = "0By_PVuWI8dydVzVuSVhtZ3FoV2M";
var FILE_ID = "1UUX98pWoC2C-95paj0EDKawZp53iMZf5Tjj2D_Z43Cg";

var DAYS_IN_ADVANCE = 7;

function duplicateDoc() {
  var templateFile = DriveApp.getFileById(FILE_ID);

  // Format (Template) Team Sync - yyyy.mm.dd
  var newName = templateFile.getName();
  
  var adjustedDate = new Date(new Date().getTime()+(DAYS_IN_ADVANCE*24*60*60*1000));
  
  newName = newName.replace('(Template)', '');
  newName = newName.replace('yyyy.mm.dd', Utilities.formatDate(adjustedDate, "PST", "yyyy.MM.dd"));
  
  var destination = DriveApp.getFolderById(FOLDER_ID);
  var newFile = templateFile.makeCopy(newName, destination);
  
  var newDoc = DocumentApp.openById(newFile.getId());
  var body = newDoc.getBody();
  
  body.replaceText('\\[Day\\]', Utilities.formatDate(adjustedDate, "PST", "d"));
  body.replaceText('\\[Month\\]', Utilities.formatDate(adjustedDate, "PST", "MMMM"));
  
  var docUrl = newDoc.getUrl();
}
		return minItem;
	}
	
	shuffle : function () {
// can re-order as simply as I want for this one
// pick a random number up to the length
// re-order from the new starting point
// this is a really challenging one to do a "true" random shuffle
//		...
	}
	

// from class review of shuffle:
	var shuffle = function(arr) {
		for (var i = 0; i < 50; i++){
			var rand1 = Math.floor(Math.random() * arr.length);
			var rand2 = Math.floor(Math.random() * arr.length);
			var temp = arr[rand2];			// these 3 lines are how you do a swap!!!
			arr[rand2] = arr [rand1];		// these 3 lines are how you do a swap!!!
			arr[rand1] = temp;				// these 3 lines are how you do a swap!!!
		}
	};
	
	
	
	
	
	
	
	
	
	sample : function (arr) {
//		...
		
// var rand = Math.random()  --> this produces decimals, we want whole numbers
// console.log(rand)
// var rand = Math.floor(Math.random() * 100)
// console.log(rand)
// var rand = Math.floor(Math.random() * arr.length)
// console.log(rand)
		
// see http://jsbin.com/fulenoreti/1/edit?js,console

// from class review of sample:
		

		var rand = Math.floor(Math.random() * arr.length);
		return arr[rand];
	}




	var sample = function (arr, num) {
		var rand;
		if (num) {
			var result = [] // need to declare the empty array to hold the values from rand
			// pick "num" random numbers
			for (var i = 0; i < num; i++) {
				rand = Math.floor(Math.random() * arr.length);
				result.push(arr[rand])  // potential problem is if the random number is the same more than once
										// edge case: if num is 3 but arr only has 2 items inside of it
			}
			console.log(result)
		}
		else {
			var rand = Math.floor(Math.random() * arr.length);
			console.log(arr[rand])
		}
	}
	



// not working yet	(mine)
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
	
	
// from class review of indexOf:
	
	function indexOf(inputArray, inputValue){
		for (var i=0; i<inputArray.length; i++){
			if(inputArray[i] === inputWavlue){
				console.log(i);
			}
		}
	}
	
	
	pluck : function () {
//		...
	}
	

// from class review of pluck:
//REVIEW THIS!!!
	
	function pluck(list, inputKey) {
	  var pluckArray = [];
	  for(var i=0; i < list.length; i++) {
	    pluckArray.push(list[i][inputKey]);
	  }
	  console.log(pluckArray)
	}

	var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
	pluck(stooges, 'name');
	
	
	
	
	
	
	
	
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










