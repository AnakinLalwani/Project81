canvas = document.getElementById("myCanvas");
canvasloop = document.getElementById("myCanvasloop");
ctx= canvas.getContext("2d");
ctxloop= canvasloop.getContext("2d");
var color = ["green", "yellow", "blue", "black", "red"];

ctx.beginPath();
ctx.lineWidth= 5 ;
ctx.strokeStyle = "green";
ctx.arc(300, 400, 100, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 5 ;
ctx.strokeStyle = "yellow";
ctx.arc(500, 400, 100, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 5 ;
ctx.strokeStyle = "blue";
ctx.arc(200, 275, 100, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 5 ;
ctx.strokeStyle = "black";
ctx.arc(400, 275, 100, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 5 ;
ctx.strokeStyle = "red";
ctx.arc(600, 275, 100, 0, 2*Math.PI);
ctx.stroke();

var xposition = [300, 500, 200, 400, 600];

var yposition = [400, 400, 275, 275, 275];

for (i=0; i<=5; i++) {
    ctxloop.beginPath();
    ctxloop.lineWidth= 5 ;
    ctxloop.strokeStyle = color[i];
    ctxloop.arc(xposition[i], yposition[i], 100, 0, 2*Math.PI);
    ctxloop.stroke();
}
