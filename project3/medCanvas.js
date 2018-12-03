const numCols = 28;//num of times
const numRows = 19;//num of times
const cellSize = 25;//px
const numCells = numCols * numRows;
let pixelGrid = document.querySelector("#pixelGrid");
let color = $("#colorChooser").val(); //

let rSlider = document.getElementById("redslide");
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
}



pixelGrid.style.gridTemplateRows = `repeat(${numRows}, ${cellSize}px)`; //JS doesnt like dashes so you have to do camel case
pixelGrid.style.gridTemplateColumns = `repeat(${numCols},${cellSize}px)`; //have to tell it to repeat # and then tell it what type it is so in this case px

for (let i = 0; i < numCells; i++){
    $("#pixelGrid").append('<span class="cell"></span>');
}

$("#colorChooser").change(function() {
    color = $(this).val();
    console.log(color);
    $("#swatch").css("background-color", color);
});

$(".cell").mousedown(function(){
    event.preventDefault();
    $(this).css("background-color", color);
    $(".cell").mouseover(function(){
        $(this).css("background-color", color);
    });
});

$(document).mouseup(function(){
    $(".cell").unbind("mouseover");
});
        
$("#reset").click(function(){
    $(".cell").css("background-color", "#ccc");
});