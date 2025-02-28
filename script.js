const isTuesday = new Date().getDay() === 2;
const isFriday = new Date().getDay() === 5;

if (isTuesday) {
  document.body.classList.add("yes");
  document.getElementById("response").textContent = "SI"
  document.getElementById("response-emoji").textContent = "🌈"
  document.getElementById("response-img").src = "https://imgur.com/a/RVQqLM2"
} else if (isFriday) {
  document.body.classList.add("no");
  document.getElementById("response").textContent = "NO, ED È PURE VENERDÌ"
  document.getElementById("response-emoji").textContent = "🎉"
  document.getElementById("response-img").src = "https://tenor.com/it/view/friday-lando-norris-f1-mclaren-gif-18574850"
} else {
  document.body.classList.add("no");
  document.getElementById("response").textContent = "NO"
  document.getElementById("response-emoji").textContent = "🍀"
  document.getElementById("response-img").src = "https://tenor.com/it/view/dont-cry-everything-i-sfine-everything-is-gonna-be-alright-dog-burning-house-gif-11300965"
}

