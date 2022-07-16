drawArea = document.querySelector("#container")
button = document.querySelector("button")

button.addEventListener("click", () => {
    let size = prompt("How many pixels would you like a side to be? (max 40)", "10")
    removeGrid();
    if (size >= 0 && size <= 40) {
        makeGrid(size);
    } else {
        makeGrid(10);
    }
});

/* Creates a square of divs with the given length */
function makeGrid(num) {
    for(let i = 0; i < Math.pow(num, 2); i++) {
        let div = document.createElement("div");

        div.addEventListener("mouseover", () => {
            div.classList.add('hovered');
        });

        div.setAttribute("class", "grid-square");
        div.style.width = `${(drawArea.offsetWidth - 2)/num - 2}px`;
        div.style.height = div.style.width;
        drawArea.appendChild(div);
    }
};

function removeGrid() {
    squares = Array.from(drawArea.querySelectorAll(".grid-square"))
    squares.forEach(child => {
        drawArea.removeChild(child);
    })
}