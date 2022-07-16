/* DOM Elements that manipulate the page layout */
drawArea = document.querySelector("#container")
buttons = document.querySelectorAll("button")

/* Event listeners trigger functions when the user interacts with DOM elements */
buttons[0].addEventListener("click", () => {
    let size = prompt("How many pixels would you like a side to be? (max 50)", "10")
    removeGrid();
    if (size >= 0 && size <= 50) {
        makeGrid(size);
    } else {
        makeGrid(10);
    }
});
buttons[1].addEventListener("click", () => {
    removeGrid();
})

let drag = false;

drawArea.addEventListener("mousedown", () => {
    drag = true
});
drawArea.addEventListener("mouseup", () => {
    drag = false;
})

/* Creates a square of divs with the given length */
function makeGrid(num) {
    for(let i = 0; i < Math.pow(num, 2); i++) {
        let div = document.createElement("div");

        div.addEventListener("mouseover", () => {
            if (drag)
                div.classList.add('hovered');
        });

        div.setAttribute("class", "grid-square");
        div.style.width = `${(drawArea.offsetWidth - 2)/num - 2}px`;
        div.style.height = div.style.width;
        drawArea.appendChild(div);
    }
};

/* Removes the grid layout from the draw area */
function removeGrid() {
    squares = Array.from(drawArea.querySelectorAll(".grid-square"))
    squares.forEach(child => {
        drawArea.removeChild(child);
    })
}