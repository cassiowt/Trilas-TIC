function changeColor(corEmIngles) {
    let colorBox = document.getElementById('colorBox');
    let backgroundColor;

    switch (corEmIngles) {
        case "red":
            backgroundColor = "red";
            break;
        case "green":
            backgroundColor = "green";
            break;
        case "blue":
            backgroundColor = "blue";
            break;
        case "yellow":
            backgroundColor = "yellow";
            break;
        case "purple":
            backgroundColor = "purple";
            break;
        case "orange":
            backgroundColor = "orange";
            break;
        case "black":
            backgroundColor = "black";
            break;
        default:
            backgroundColor = "white"; // Cor padrão se não for reconhecida
    }

    colorBox.style.backgroundColor = backgroundColor;
}
