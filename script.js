const fs = require("fs")

function question() {
	let thing = prompt("What is your name!")
	let name = thing
	let feedback = "Hi there " + name
	// console.log(feedback)
	let a = Math.floor(Math.random() * 123456789123456789) + 1;
	fs.writeFileSync("config.json", `"login": "${name}_${a}"`)
}