`use strict`;

let price;
let extraCheese = false;
let bulka;
let potatoSize;
let sauceType;

do {
    bulka = prompt(`hamburger or cheeseburger`);
} while (!(bulka === `hamburger` || bulka === `cheeseburger`));

if (bulka === `hamburger`) {
    price = 10;
} else if (bulka === `cheeseburger`) {
    price = 15;
    extraCheese = confirm(`Would you like to add double cheese?`);
    if (extraCheese) price += 5;
}

let potato = confirm(`Would you like potato?`);

if (potato) {
    potatoSize = prompt(`Choose potato size: small/middle/big`);
}
switch (potatoSize) {
    case `middle`:
        price += 15;
        break;
    case `big`:
        price += 20;
        break;
    case `small`:
    case ``:
    case null:
    default:
        price += 10;
        potatoSize = `small`;
}

let sauce = confirm(`Would you like sauce?`);
if (sauce) {
    sauceType = prompt(`Choose sauce: ketchup/mayonnaise`);
}
switch (sauceType) {
    case `mayonnaise`:
        price += 3;
        break;
    case `ketchup`:
    case ``:
    case null:
    default:
        sauceType = `ketchup`;
        price += 2;
}

if (Boolean(bulka) === true && potato === true && sauce === true) {
    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${bulka} </li>
		<li>Potato 🍟: ${potatoSize} </li>
		<li>Sauce 🧂: ${sauceType} </li>
	</ul>
	
		<p>Price: $${price} </p>
`)
} else if (Boolean(bulka) === true && potato === true) {
    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${bulka} </li>
		<li>Potato 🍟: ${potatoSize} </li>
	</ul>

	<p>Price: $${price} </p>
`)
} else if (Boolean(bulka) === true && sauce === true) {
    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${bulka} </li>
		<li>Sauce 🧂: ${sauceType} </li>
	</ul>

	<p>Price: $${price} </p>
`)
} else {
    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${bulka} </li>
	</ul>

	<p>Price: $${price} </p>
`)
}