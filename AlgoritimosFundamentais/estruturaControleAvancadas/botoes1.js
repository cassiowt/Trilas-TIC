document.addEventListener("DOMContentLoaded", function() {
    const colors = ["red", "green", "blue", "yellow", "purple", "orange", "black", "gray"];
    const buttonsContainer = document.getElementById("buttonsContainer");

    colors.forEach(function(color) {
        const button = document.createElement("button");
        button.textContent = color.charAt(0).toUpperCase() + color.slice(1); // Convert the first letter to uppercase
        button.onclick = function() {
            changeColor(color);
        };
        buttonsContainer.appendChild(button);
    });
});

function changeColor(selectedColor) {
    const colorBox = document.getElementById("colorBox");
    colorBox.style.backgroundColor = selectedColor;
}
