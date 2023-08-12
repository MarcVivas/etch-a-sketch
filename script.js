let gridDim = 16;
let isClicking = false;

function hoverEffect(e){
    if(isClicking){
        e.target.style.background = "#00b4d8";
    }
}

function resetGrid(e) {
    document.body.removeChild(document.querySelector(".mainDiv"));
    main();
}

function changeGridSize(e) {
    gridDim = document.querySelector("#gridSize").value;
    resetGrid(e);
}

function clicking(e){
    isClicking = true;
}

function notClicking(e){
    isClicking = false;
}

function main(){

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("mainDiv");
    document.body.appendChild(mainDiv);
    
    let rows = new Array(gridDim);
    for (let i = 0; i < gridDim; i++){
        rows[i] = document.createElement("div");    
        rows[i].classList.add("row");
        mainDiv.appendChild(rows[i]);
    
        for(let j = 0; j < gridDim; j++){
            const cellId = gridDim*i + j;
            
            const div = document.createElement("div");
            div.setAttribute("id", cellId);
            div.classList.add("cell");
            rows[i].addEventListener("mousedown", clicking);
            rows[i].addEventListener("mousedown", hoverEffect);
            rows[i].addEventListener("mouseup", notClicking);
            rows[i].addEventListener("mouseover", hoverEffect);

            rows[i].appendChild(div);
        }
    }

    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", resetGrid);

    const submit = document.querySelector("#submit");
    submit.addEventListener("click", changeGridSize);
}

main();