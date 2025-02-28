const isTuesday = new Date().getDay() === 2;
const isFriday = new Date().getDay() === 5;

if (isTuesday) {
  document.body.classList.add("no");
  document.getElementById("response").textContent = "SI"
  document.getElementById("response-emoji").textContent = "🌈"
  document.getElementById("response-img").src = "https://imgur.com/a/RVQqLM2"
} else if (isFriday) {
  document.body.classList.add("no");
  document.getElementById("response").textContent = "NO, ED È PURE VENERDÌ"
  document.getElementById("response-emoji").textContent = "🎉"
  document.getElementById("response-img").src = "https://media1.tenor.com/m/k5y7WanF62UAAAAd/friday-lando.gif"
} else {
  document.body.classList.add("no");
  document.getElementById("response").textContent = "NO"
  document.getElementById("response-emoji").textContent = "🍀"
  document.getElementById("response-img").src = "https://media1.tenor.com/m/96aiTxlLf20AAAAd/dont-cry-everything-i-sfine.gif"
}

