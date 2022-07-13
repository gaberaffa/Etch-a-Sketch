drawArea = document.querySelector("#container")

/* Creates a square of divs with the given length */
function makeGrid(num) {
    for(let i = 0; i < Math.pow(num, 2); i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "grid-square");
        div.style.width = `${Math.floor((drawArea.offsetWidth - 2)/num) - 2}px`;
        //div.style.width = `${100/num}%`;
        div.style.height = div.style.width;
        drawArea.appendChild(div);
    }
};