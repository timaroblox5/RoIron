//get top themes
var themesListLocation = "../../data/themes/top.json";

var themesList = [];
var elementsList = document.querySelector('#top-themes-list');

async function getThemesList() {
	themesList = await fetch(themesListLocation)
	.then(res => res.json());

	themesList.forEach(x => elementsList.append(createThemeCard(x)));
}

function createThemeCard(theme) {
	var card = document.createElement("div");

	card.classList.add('card');

	card.innerHTML += `<div class="header">${theme.name}</div>`;
	card.innerHTML += `<img src="${theme.images[0]}">`;

	if (theme.contact && theme.contact.discord) card.innerHTML += `<div class="media lower-third">
		<img src="../../images/media/discord.png">
		<span class="button small discord-color">${theme.contact.discord}</span>
	</div>`;

	if (theme.link != null) {
		var buttons = '';

		if (theme.link.dark) buttons += `<a class="button border green" href="${theme.link.dark}">Dark</a>`;
		if (theme.link.file) buttons += `<a class="button border green" href="${theme.link.file}">Get</a>`;
		if (theme.link.light) buttons += `<a class="button border green" href="${theme.link.light}">Light</a>`;

		if (buttons != '') card.innerHTML += `<div class="flex space-around center-v fill hover-button">${buttons}</div>`;
	}

	var tags = '';
	if (theme.animated) tags += `<span class="button border orange narrow small">Animated</span>`;
	if (tags != '') card.innerHTML += `<div class="footer">${tags}</div>`;

	return card;
}

getThemesList()
