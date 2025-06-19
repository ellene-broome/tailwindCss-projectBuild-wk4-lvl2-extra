// script.js

console.log("Hello from JS!");

// Show alert when a button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.querySelector("#contactBtn");

  if (contactButton) {
    contactButton.addEventListener("click", function () {
      alert("Thanks for reaching out! We'll get back to you soon.");
    });
  }
});
