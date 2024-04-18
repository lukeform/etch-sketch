let box;
let row;


const newGrid = document.querySelector("#newGrid")
newGrid.addEventListener("click", () =>{

        destroyGrid();
        createGrid();

});

function destroyGrid(){
    // const rowParent = document.querySelector("#container");
    // const rowChild = document.querySelectorAll(".row");     
    // const boxChild = document.querySelectorAll(".box");   
    // console.log(rowChild);
    // console.log(boxChild);
    // console.log(rowChild.length);
    
    // while (rowChild.length > 0){

    //     console.log("while is being read");
        
        document.querySelector("#container").innerHTML = "";


    
}

function createGrid(theColor){
    let gridSize = prompt("Please choose a grid size (Less than 100 recommended)");
    console.log(gridSize)
    
    const container =  document.querySelector("#container");


    for(i=0; i < gridSize; i++){
        
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.backgroundColor = "white";
        container.appendChild(row);
            for (x=0; x < gridSize; x++){

                

                let box = document.createElement("div");
                box.classList.add("box");
                box.style.backgroundColor = "white";
                let opacity = box.style.opacity = 0.1;     
                row.appendChild(box);
                box.addEventListener("mouseover", () => {
                    box.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                    opacity = box.style.opacity = opacity + 0.1;});

            };
         }
    

        
        }

