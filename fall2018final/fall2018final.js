$("nav div:first-of-type p").click(function(){
    $("nav div:first-of-type ul").slideToggle("slow");
});

$("nav div:last-of-type p").click(function(){
    $("nav div:last-of-type ul").slideToggle("slow");
});

$("nav div:nth-child(2) p").click(function(){
    $("nav div:nth-child(2) ul").slideToggle("slow");
});

'use strict';

let title = ("article0.txt");
$("article").load(title);

$("input").change(function(){
   title = $(this).val();
   $("article").load(title); 
});