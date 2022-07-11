drawArea = document.querySelector("#container")

/* Creates a square of divs with the given length */
function makeGrid (num) {
    for(let i = 0; i < Math.pow(num, 2); i++) {
        let div = document.createElement("div");
        drawArea.appendChild(div);
    }
}