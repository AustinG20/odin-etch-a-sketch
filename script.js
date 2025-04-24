const container = document.querySelector(".container");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.flexWrap = "wrap";

createGrid(16);

const newGrid = document.querySelector(".button");
newGrid.addEventListener("click", () => {
    let size = 0;
    while(size < 1 || size > 100)
        size = prompt("Please enter new grid size");
    
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

            div.addEventListener("mouseenter", () => {
                if(div.style.backgroundColor == "black"){
                    div.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
                    div.style.opacity = Math.random();
                }

                if(div.style.opacity >= 0 && div.style.opacity < 1){
                    div.style.opacity = Number(div.style.opacity) + 0.1;
                }
            })

            rowDiv.appendChild(div);
        }

        container.appendChild(rowDiv);
    }
}