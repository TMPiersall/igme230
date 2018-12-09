const numCols = 22;//num of times
const numRows = 15;//num of times
const cellSize = 30;//px
const numCells = numCols * numRows;
let pixelGrid = document.querySelector("#pixelGrid");
let opac = ("rgba(0, 0, 0, 0.2)");
let color = $("#colorChooser").val(); 
//easiest way for me to impliment a num grid this specific was through an array (or at least for someone with my limited knowledge)
let easyGrid = 
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 5, 5, 8, 5, 6, 7, 2, 2, 2, 2,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 9, 9, 9, 9, 5, 5, 6, 6, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 9, 9, 9, 9, 9, 6, 6, 6, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 10, 10, 10, 9, 9, 11, 11, 5, 5, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 9, 9, 9, 9, 9, 9, 11, 11, 11, 5, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 3, 3, 3, 3, 3, 3, 3, 3,
    2, 2, 10, 10, 10, 2, 2, 2, 11, 11, 11, 11, 11, 2, 2, 2, 2, 4, 4, 2, 12, 12,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 2, 7, 2, 2, 2, 2, 2, 4, 4, 12, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 2, 2, 7, 2, 2, 2, 12, 12, 12, 12, 2, 2,
    1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 7, 1, 12, 7, 7, 12, 4, 4, 1, 1, 1, 1,
    1, 12, 4, 4, 12, 12, 12, 12, 12, 7, 7, 12, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, ];

pixelGrid.style.gridTemplateRows = `repeat(${numRows}, ${cellSize}px)`; //JS doesnt like dashes so you have to do camel case
pixelGrid.style.gridTemplateColumns = `repeat(${numCols},${cellSize}px)`; //have to tell it to repeat # and then tell it what type it is so in this case px

for (let i = 0; i < numCells; i++){
    $("#pixelGrid").append('<span class="cell">' + easyGrid[i] + '</span>');
}

$("#colorChooser").change(function() {
    color = $(this).val();
    console.log(color);
    $("#swatch").css("background-color", color);
    
});

$(".cell").mousedown(function(){
    event.preventDefault();
    $(this).css("background-color", color);
    $(this).css("color", opac); //change num opacity when clicked
    $(".cell").mouseover(function(){
        $(this).css("background-color", color);
        $(this).css("color", opac); //and when on hold
    });
    
});

$(document).mouseup(function(){
    $(".cell").unbind("mouseover");
});
        
$("#reset").click(function(){
    $(".cell").css("background-color", "#ccc");
    $(".cell").css("color", "rgba(0, 0, 0)"); //reset num color
});