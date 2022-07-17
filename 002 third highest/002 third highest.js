// write a program that reads ten numbers and
// figures out which number is the third highest

//psuedocode:
// convert string to numbers in array;
// sort them in descending order;
// print first 3 indexes.

function thirdHighest(numbers) {
	let array = numbers.split(' ').map(Number);
	console.log('original: ' + array);

	array = array.sort(function(a, b){return b-a});
	console.log('descending: ' + array);

	console.log(`three highest: ${array[0]}, ${array[1]}, ${array[2]}`);

	console.log(`third highest: ${array[2]}`);
}

thirdHighest('20 3 12 23 18 270 9 546 3217 1');