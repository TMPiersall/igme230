/* Don't use <script> tags in a linked js file! */

$("div.menubox:first-of-type p").click(function(){
    $("div.menubox:first-of-type ul").slideToggle("slow");
});
$("div.menubox:last-of-type p").click(function(){
    $("div.menubox:last-of-type ul").slideToggle("slow");
});

'use strict';

let title = ("content1.txt");
$("#content").load(title);

$("#choose-content").change(function(){
    title = $(this).val();
    $("#content").load(title);
});