const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const yesMessage = document.getElementById("yes-message");

// When hovering over the "No" button
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * window.innerWidth * 0.8; // Keep within 80% of screen width
  const y = Math.random() * window.innerHeight * 0.8; // Keep within 80% of screen height
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// When clicking "Yes"
yesBtn.addEventListener("click", () => {
  yesMessage.style.display = "block"; // Show the message
  yesMessage.innerHTML = "Yay! 🥳 You said YES! Let’s plan our date soon!";
});
