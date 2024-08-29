var rows = 5;
var columns = 5;

var currTile;
var otherTile;

var turns = 0;
var title = "Title";

window.onload = function() {
    //intialize 5x5 board
    for(let r = 0; r < rows ;r++)
    {
        for(let c =0 ;c < columns ;c++)
        {
            //<img>
            let tile = document.createElement("img");
            tile.src= "./images/blank.jpg";
            
            //DRAG AND DROP FUNCTIONALITY
            tile.addEventListener("dragstart",dragStart);   //click on an image to drag
            tile.addEventListener("dragover",dragOver);     //drag an image
            tile.addEventListener("dragenter",dragEnter);   //dragging an image over other one
            tile.addEventListener("dragleave",dragLeave);   //dragging an image away from another one
            tile.addEventListener("drop",dragDrop);             //drop an image on the other one
            tile.addEventListener("dragend",dragEnd);       //after you complete dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces

    let pieces = []
    for(let i = 1 ; i <= rows*columns;i++)
    {
        pieces.push(i.toString());
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length;i++)
    {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let temp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = temp;
    }
    let images = ['fox','tiger','white-horse','peacock','panda'];
    random = Math.floor(Math.random() * images.length);
    curr_image = images[random];
    for(let i = 0; i < pieces.length;i++)
    {
        let tile = document.createElement("img");
        tile.src = `./images/${curr_image}/` + pieces[i] + ".jpg";

        //DRAG AND DROP FUNCTIONALITY
        tile.addEventListener("dragstart",dragStart);   //click on an image to drag
        tile.addEventListener("dragover",dragOver);     //drag an image
        tile.addEventListener("dragenter",dragEnter);   //dragging an image over other one
        tile.addEventListener("dragleave",dragLeave);   //dragging an image away from another one
        tile.addEventListener("drop",dragDrop);             //drop an image on the other one
        tile.addEventListener("dragend",dragEnd);       //after you complete dragDrop
        
        document.getElementById("pieces").append(tile);
    }
}

//DRAG TILES
function dragStart(){
    currTile = this;    //this refers to the image that was clicked on for dragging
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){
    
}

function dragDrop(){
    otherTile = this;   //this refers to image that is being dropped on
}

function dragEnd(){
    if (currTile.src.includes("blank")){
        retunrn;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
}