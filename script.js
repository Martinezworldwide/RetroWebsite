// Popup on Page Load
window.onload = function() {
  alert("Welcome to the coolest website ever!");
};

// Fun Interactive Button
document.addEventListener("DOMContentLoaded", function() {
  const button = document.createElement("button");
  button.innerHTML = "Click Me!";
  button.classList.add("fun-button");
  button.onclick = function() {
    alert("You clicked the button! Awesome!");
  };
  document.body.appendChild(button);
});
