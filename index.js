//packages
var fs = require('fs');
const data = require('./roles.json');

//variables

//functions
function getRoles(char) {
	//char must be an array with every player as an object with "Name": [player name] and "Alignment": [alignment]

	//List Roles
	let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let i = 0;
	let items = {};
	let roles = [];
	while (i < data.Roles.length) {
		let ii = 0;
		while (ii < data.Roles[i].Ability.length) {
			roles[roles.length] = [
				i.toString() + letters.charAt(ii),
				data.Roles[i].Ability[ii].Power,
				data.Roles[i].Keywords
			];
			ii++;
		}
		i++;
	}
	console.log(roles);

	//Sort Roles
	let comb = [];
	i = 0;
	while (i < roles.length) {
		ii = i + 1;
		while (ii < roles.length) {
			if (roles[i][0].charAt(0) !== roles[ii][0].charAt(0)) {
				let match = 0;
				if (roles[ii][2].includes(roles[i][2][0])) {
					match++;
				}
				if (roles[ii][2].includes(roles[i][2][1])) {
					match++;
				}
				if (roles[ii][2].includes(roles[i][2][2])) {
					match++;
				}
				comb[comb.length] = [
					roles[i][0] + roles[ii][0],
					roles[i][1] + roles[ii][1],
					match
				];
			}
			ii++;
		}
		i++;
	}
	console.log(comb);
}
getRoles();
