// Remove the main element
const main = document.getElementById("main");
if (main) {
    main.remove();
}

// Create new header
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "wayne is the champion";

document.body.appendChild(newHeader);
