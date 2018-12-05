const numCols = 34;//num of times
const numRows = 23;//num of times
const cellSize = 20;//px
const numCells = numCols * numRows;
let opac = ("rgba(0, 0, 0, 0.2)");
let pixelGrid = document.querySelector("#pixelGrid");
let color = $("#colorChooser").val(); //
$("#swatch").css("background-color", color);
$("#pixelGrid").css("font-size", "12px");

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

let hardGrid = 
  [ 11
    , 12, 12, 16, 16, 16, 12, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 10, 10, 16, 16, 16, 16, 16, 11, 16, 12, 
    12, 11, 12, 16, 16, 12, 12, 11, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 16, 16, 16, 16, 16, 16, 16, 16, 12, 12, 16, 16, 12,
    16, 12, 12, 16, 12, 12, 12, 11, 11, 16, 16, 16, 1, 16, 16, 16, 16, 16, 16, 4, 15, 15, 16, 16, 16, 16, 16, 16, 12, 12, 12, 16, 12, 11,
    3, 3, 3, 3, 12, 10, 10, 3, 11, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 4, 15, 15, 3, 3, 3, 3, 3, 3, 12, 12, 3, 3, 12, 11,
    3, 3, 3, 3, 3, 10, 10, 3, 3, 3, 3, 3, 2, 2, 1, 3, 3, 3, 15, 15, 15, 4, 3, 3, 3, 3, 3, 3, 3, 10, 10, 3, 12, 11,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 2, 4, 1, 2, 4, 4, 15, 15, 15, 3, 3, 3, 3, 3, 3, 3, 10, 10, 3, 3, 12,
    11, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 1, 4, 4, 1, 2, 4, 2, 4, 4, 4, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
    11, 11, 10, 14, 14, 14, 14, 14, 14, 14, 14, 7, 1, 4, 13, 7, 2, 2, 13, 7, 4, 7, 7, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
    14, 10, 10, 14, 14, 14, 14, 14, 14, 14, 14, 14, 4, 4, 13, 13, 2, 2, 13, 13, 4, 4, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
    14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 7, 2, 2, 4, 4, 2, 4, 4, 1, 1, 2, 7, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 15, 1, 1, 4, 13, 13, 4, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 6, 4, 2, 2, 2, 2, 2, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 1, 1, 4, 4, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10,
    9, 9, 9, 9, 9, 9, 9, 9, 9, 15, 4, 2, 4, 4, 15, 1, 1, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
    9, 9, 9, 9, 9, 9, 9, 9, 9, 15, 15, 4, 4, 4, 4, 1, 1, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
    9, 9, 9, 9, 9, 9, 9, 9, 4, 4, 4, 4, 1, 1, 1, 2, 2, 1, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
    9, 9, 9, 9, 9, 9, 9, 9, 4, 1, 1, 4, 4, 1, 4, 4, 1, 1, 7, 7, 9, 9, 12, 9, 9, 9, 9, 12, 9, 9, 9, 9, 9, 9,
    8, 8, 12, 8, 8, 8, 8, 15, 4, 1, 4, 4, 4, 1, 1, 7, 7, 7, 7, 4, 8, 8, 8, 11, 8, 8, 8, 12, 8, 12, 8, 8, 8, 8,
    8, 8, 11, 11, 12, 8, 15, 15, 4, 4, 4, 4, 4, 1, 1, 6, 6, 8, 1, 15, 4, 8, 8, 12, 8, 8, 8, 11, 8, 12, 8, 8, 8, 12,
    12, 8, 8, 11, 8, 12, 15, 15, 4, 4, 4, 15, 15, 4, 1, 1, 6, 8, 8, 15, 15, 8, 11, 12, 8, 8, 12, 11, 8, 11, 8, 8, 8, 12,
    12, 8, 8, 12, 8, 11, 15, 15, 15, 15, 15, 15, 15, 15, 1, 1, 7, 8, 12, 8, 4, 7, 11, 8, 8, 8, 12, 8, 8, 8, 12, 8, 8, 12,
    11, 8, 8, 12, 8, 11, 12, 15, 15, 15, 15, 7, 7, 7, 15, 7, 7, 8, 8, 12, 7, 7, 12, 8, 8, 8, 12, 8, 8, 8, 12, 8, 8, 12 ];

pixelGrid.style.gridTemplateRows = `repeat(${numRows}, ${cellSize}px)`; //JS doesnt like dashes so you have to do camel case
pixelGrid.style.gridTemplateColumns = `repeat(${numCols},${cellSize}px)`; //have to tell it to repeat # and then tell it what type it is so in this case px

for (let i = 0; i < numCells; i++){
    $("#pixelGrid").append('<span class="cell">' + hardGrid[i] + '</span>');
}

$("#colorChooser").change(function() {
    color = $(this).val();
    console.log(color);
    $("#swatch").css("background-color", color);
});

$(".cell").mousedown(function(){
    event.preventDefault();
    $(this).css("color", opac);
    $(this).css("background-color", color);
    $(".cell").mouseover(function(){
        $(this).css("background-color", color);
        $(this).css("color", opac);
    });
});

$(document).mouseup(function(){
    $(".cell").unbind("mouseover");
});
        
$("#reset").click(function(){
    $(".cell").css("background-color", "#ccc");
    $(".cell").css("color", "rgba(0, 0, 0)");
});