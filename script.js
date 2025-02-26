const isTuesday = new Date().getDay() === 2;
document.body.classList.add(isTuesday ? "yes" : "no");
document.getElementById("text").textContent = isTuesday ? "SI" : "NO";
document.getElementById("image").src = isTuesday ? "yes-image.png" : "no-image.png";
