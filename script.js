const isTuesday = new Date().getDay() === 2;
document.body.classList.add(isTuesday ? "yes" : "no");
document.getElementById("response").textContent = isTuesday ? "SI" : "NO";
document.getElementById("response-img").src = isTuesday ? "yes-image.png" : "no-image.png";
