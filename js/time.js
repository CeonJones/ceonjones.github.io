/* Time function for day and night theme */

let timeCheckEnabled = true;

/* This function is used to update the theme based on the current time. It checks the current hour using the Date object and then adds the day or night class to the body element */

function updateTimeBasedTheme() {
	if (!timeCheckEnabled) {
		return;
	}
	const currentTime = new Date();
	const hour = currentTime.getHours();
	const body = document.querySelector('body');

	if (hour >= 6 && hour < 18) {
		body.classList.add('day');
		body.classList.remove('night');
	} else {
		body.classList.add('night');
		body.classList.remove('day');
	}
}

/* This function is used to toggle the theme between day and night. It toggles the day and night classes on the body element and then calls the updateIcon function to update the icon. */
function toggleTheme() {
	const body = document.querySelector('body');
	body.classList.toggle('day');
	body.classList.toggle('night');
	updateIcon();
}

/* This function is used to update the icon based on the current theme. It checks if the body element has the night class and then updates the icon accordingly. */
function updateIcon() {
	const body = document.querySelector('body');
	const icon = document.getElementById('icon');
	const isNight = body.classList.contains('night');
	icon.innerHTML = isNight ? `
		<!-- Replace the content and styles with your own night SVG -->
		<span class="material-symbols-outlined">
		dark_mode
		</span>
	` : `
		<!-- Replace the content and styles with your own day SVG -->
		<span class="material-symbols-outlined">
		light_mode
		</span>
	`;
}

/* This function is used to disable the time check. It sets the timeCheckEnabled variable to false. */
function disableTimeCheck() {
	timeCheckEnabled = false;
}

updateTimeBasedTheme();
updateIcon();

setInterval(() => {
	updateTimeBasedTheme();
	updateIcon();
}, 60 * 1000);
