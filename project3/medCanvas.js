const numCols = 28;//num of times
const numRows = 19;//num of times
const cellSize = 25;//px
const numCells = numCols * numRows;
let opac = ("rgba(0, 0, 0, 0.2)");
let pixelGrid = document.querySelector("#pixelGrid");
let color = $("#colorChooser").val(); //
//bigger canvas calls for bigger array
let medGrid = 
  [ 13, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 8, 3, 3, 3, 3, 13, 3, 3, 3, 3, 3, 3, 3, 13, 3, 3, 3,
    13, 13, 13, 9, 13, 8, 8, 9, 5, 5, 5, 9, 8, 9, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,
    13, 3, 8, 8, 9, 8, 8, 8, 9, 5, 5, 9, 8, 8, 8, 4, 13, 3, 3, 3, 4, 4, 4, 3, 3, 13, 3, 3,
    13, 3, 8, 8, 8, 8, 11, 5, 9, 5, 5, 11, 5, 8, 8, 4, 3, 13, 3, 3, 3, 3, 4, 4, 4, 13, 3, 3,
    13, 3, 8, 8, 8, 8, 11, 11, 9, 5, 5, 11, 11, 8, 10, 8, 3, 13, 3, 3, 3, 3, 3, 3, 3, 3, 13, 3,
    13, 3, 8, 8, 10, 8, 8, 9, 5, 5, 5, 5, 9, 8, 10, 8, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 13, 3,
    13, 13, 8, 8, 10, 8, 8, 5, 5, 11, 11, 11, 5, 8, 10, 8, 13, 2, 2, 2, 13, 2, 13, 13, 13, 13, 2, 2,
    13, 3, 8, 8, 10, 8, 9, 5, 5, 5, 11, 11, 5, 5, 10, 8, 8, 4, 2, 3, 3, 3, 4, 4, 4, 4, 4, 2,
    2, 3, 8, 8, 10, 10, 9, 5, 5, 5, 5, 5, 5, 5, 3, 9, 8, 8, 2, 3, 3, 3, 3, 3, 3, 4, 4, 3,
    2, 3, 8, 8, 10, 10, 6, 6, 5, 5, 12, 12, 5, 6, 3, 3, 3, 9, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3,
    13, 3, 9, 8, 8, 10, 5, 6, 6, 6, 6, 6, 6, 5, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3,
    2, 3, 9, 8, 8, 10, 5, 5, 5, 5, 5, 5, 5, 7, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3,
    2, 3, 3, 9, 8, 9, 5, 7, 7, 7, 7, 7, 7, 5, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3,
    2, 2, 2, 5, 8, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 3, 3, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 1, 3, 4, 4, 4, 4, 2, 3, 3, 4, 4, 4, 4, 4,
    2, 3, 1, 5, 5, 6, 5, 5, 5, 6, 5, 6, 5, 5, 1, 1, 3, 3, 4, 4, 4, 2, 3, 3, 3, 3, 4, 4,
    2, 1, 1, 1, 5, 6, 5, 5, 5, 5, 5, 6, 5, 5, 1, 1, 1, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 4,
    2, 1, 1, 1, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3,
    2, 3, 1, 1, 1, 1, 5, 5, 5, 1, 1, 5, 5, 5, 1, 1, 1, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3 ];

//still hope to get the sliders going. Start code for that commented below
/*let rSlider = document.getElementById("redslide");
let rOutput = document.getElementById("rtest");
rOutput.innerHTML = rSlider.value;

rSlider.oninput = function() {
    rOutput.innerHTML = this.value;
}

let gSlider = document.getElementById("greenslide");
let gOutput = document.getElementById("gtest");
gOutput.innerHTML = gSlider.value;

gSlider.oninput = function() {
    gOutput.innerHTML = this.value;
}

let bSlider = document.getElementById("blueslide");
let bOutput = document.getElementById("btest");
bOutput.innerHTML = bSlider.value;

bSlider.oninput = function() {
    bOutput.innerHTML = this.value;
}*/

//auto sets the example color swatch to first med grid color
$("#swatch").css("background-color", color);

pixelGrid.style.gridTemplateRows = `repeat(${numRows}, ${cellSize}px)`; //JS doesnt like dashes so you have to do camel case
pixelGrid.style.gridTemplateColumns = `repeat(${numCols},${cellSize}px)`; //have to tell it to repeat # and then tell it what type it is so in this case px

for (let i = 0; i < numCells; i++){
    $("#pixelGrid").append('<span class="cell">' + medGrid[i] + '</span>');
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