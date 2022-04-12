function hanoi(array) {
	let locAr = array;

	let i = 0;

	console.log(i + ':' + locAr[0]);
	console.log(i + ':' + locAr[1]);
	console.log(i + ':' + locAr[2]);
	console.log('---');
	i++;

	while (locAr[0] != '') {
		locAr[1] += locAr[0].slice(-1);
		locAr[0] = locAr[0].slice(0,-1);
		console.log(i + ':' + locAr[0]);
		console.log(i + ':' + locAr[1]);
		console.log(i + ':' + locAr[2]);
		console.log('---');
		i++;
	}

	while (locAr[1] != '') {
		locAr[2] += locAr[1].slice(-1);
		locAr[1] = locAr[1].slice(0,-1);
		console.log(i + ':' + locAr[0]);
		console.log(i + ':' + locAr[1]);
		console.log(i + ':' + locAr[2]);
		console.log('---');
		i++;
	}
}


hanoi(['ABC', '', ''])
