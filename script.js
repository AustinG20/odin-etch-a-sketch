const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexWrap = "wrap";

createGrid(16);

const newGrid = document.querySelector(".button");
newGrid.addEventListener("click", () => {
    const size = prompt("Please enter new grid size");
    
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }

    createGrid(size);
})

function createGrid(size){
    for(let i=0; i<size;i++){
        const rowDiv = document.createElement("div");
        rowDiv.style.display = "flex";
        rowDiv.style.justifyContent = "center";
        rowDiv.style.width = "100%";

        for(let j=0;j<size;j++){
            const div = document.createElement("div");
            div.style.backgroundColor = "black";
            div.style.height = "20px";
            div.style.aspectRatio = "1/1";
            div.style.margin = "5px";

            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "blue";
            })

        /* div.addEventListener("mouseleave", () =>{
                div.style.backgroundColor = "black";
            })*/

            rowDiv.appendChild(div);
        }

        container.appendChild(rowDiv);
    }
}