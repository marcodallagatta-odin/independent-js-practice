const choices = ['rock', 'paper', 'scissors'];
// possible winning combinations for the first value
// based on index numbers of the 'choices' variable
const winners = ['10', '02', '21'];

function wordToIndex (i) {
	switch (i) {
		case 'rock':
			return '0';
			break;
		case 'paper':
			return '1';
			break;
		case 'scissors':
			return '2';
			break;
	}
}

function rps(input) {
	if (!choices.includes(input)) {
		console.log(`Your selection "${input}" wasn't valid\nplease choose either "rock", "paper" or "scissors"\n`);
		return;
	}

	console.log(`User has choosen: ${input}`);

	const compChoice = choices[Math.floor(Math.random() * 3)];
	console.log(`Computer has choosen: ${compChoice}`);

	const challenge = `${wordToIndex(input)}${wordToIndex(compChoice)}`;

	if (winners.includes(challenge)) {
		console.log(`YOU WON!\n`);
	} else {
		console.log(`You lost :(\n`);
	}
}

rps('rock');
rps('rock');
rps('rock');
rps('ducks');
rps('paper');
rps('paper');
rps('paper');
rps('scissors');
rps('scissors');
rps('scissors');