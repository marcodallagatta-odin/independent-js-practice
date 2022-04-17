function isPrimeUpTo(num) {
	let resultFinal = [];

	for (let i = 2; i <= num; i++) {

		let resultLoop = [];
		for (let x = 2; x <= i; x++) {
			if (i % x === 0 && x != i) {
				resultLoop.push(x);
			}
		}

		if (resultLoop.length === 0) {
			resultFinal.push(i);
		}
	}
	console.log('The prime numbers up to ' + num + ' are: ' + resultFinal);
}

isPrimeUpTo(100);

//"The prime numbers up to 100 are: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97"
