const MORSE_TABLE = {
	".-": "a",
	"-...": "b",
	"-.-.": "c",
	"-..": "d",
	".": "e",
	"..-.": "f",
	"--.": "g",
	"....": "h",
	"..": "i",
	".---": "j",
	"-.-": "k",
	".-..": "l",
	"--": "m",
	"-.": "n",
	"---": "o",
	".--.": "p",
	"--.-": "q",
	".-.": "r",
	"...": "s",
	"-": "t",
	"..-": "u",
	"...-": "v",
	".--": "w",
	"-..-": "x",
	"-.--": "y",
	"--..": "z",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	"-----": "0",
};

function decode(expr) {
	// hello 00 10 10 10 10  00000000 10    00 10 11 10 10   00 10 11 10 10   0000 111111
	let input = "";
	let str = "";

	for (let i = 0; i < expr.length; i += 10) {
		input = expr.slice(i, i + 10);
		if (input === "**********") {
			str += " ";
			continue;
		}

		let decoder = "";
		let binary = "";
		for (let j = 0; j < input.length; j += 2) {
			binary = input.slice(j, j + 2);
			if (binary === "10") {
				decoder += ".";
			}
			if (binary === "11") {
				decoder += "-";
			}
		}
		str += MORSE_TABLE[decoder];
	}

	return str;
}

module.exports = {
	decode,
};
