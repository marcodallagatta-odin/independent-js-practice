function hanoi(array) {
	let locAr = array;
	let i = 0;

	printHanoi(locAr, i);
	i++;

	while (locAr[0] != '') {
		locAr[1] += locAr[0].slice(-1);
		locAr[0] = locAr[0].slice(0,-1);
		printHanoi(locAr, i);
		i++;
	}

	while (locAr[1] != '') {
		locAr[2] += locAr[1].slice(-1);
		locAr[1] = locAr[1].slice(0,-1);
		printHanoi(locAr, i);
		i++;
	}
}

function printHanoi(array, i) {
	console.log(i + ':' + array[0]);
	console.log(i + ':' + array[1]);
	console.log(i + ':' + array[2]);
	console.log('---');
}

console.log('--- 1 BLOCK ---');
hanoi(['A', '', '']);

console.log('--- 3 BLOCKS ---');
hanoi(['ABC', '', '']);

console.log('--- 6 BLOCK ---');
hanoi(['ABCDEF', '', '']);

console.log('--- TO INFINITY AND BEYOND ---');
hanoi(['ABCDEFGHILMNOPQRSTUVZ', '', '']);