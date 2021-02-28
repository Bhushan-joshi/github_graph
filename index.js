const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');
const readline = require('readline');

const FILE_PATH = './data.json';

const makeCommit = number => {
	if (number === 0) return simpleGit().push();// push code after completing all commits
	const x = random.int(0, 54);//creating random week
	const y = random.int(0, 6);// seleting random day
	const DATE = moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format();//creating a random fromatted Date
	const data = {
		date: DATE,
	}
	console.log(DATE);//satisfaction that code is working 😂

	jsonfile.writeFile(FILE_PATH, data, () => {//opening file and wrinting Date init
		simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE },//commiting code 
			makeCommit.bind(this, --number));//commiting recursively
	});
}

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Enter Number of commits you want to make : ", function (res) {
	const answer = parseInt(res);
	makeCommit(answer);
	rl.close();
});