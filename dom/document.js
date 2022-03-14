var lienzo = document.getElementById("dibujoCanvas").getContext("2d");
var lienzo2 = document.getElementById("dibujoCanvas2").getContext("2d");

makeLine(lienzo,"blue", 50, 0, 50, 300);
makeLine(lienzo,"blue", 50, 150, 150, 0);
makeLine(lienzo,"blue", 50, 150, 150, 300);
makeLine(lienzo,"red", 0, 0, 0, 300);
makeLine(lienzo,"red", 0, 0, 200, 0);
makeLine(lienzo,"red", 200, 300, 0, 300);
makeLine(lienzo,"red", 200, 300, 200, 0);

for(var i=0; i<=300; i+=15 ){
    makeLine(lienzo2, "green", 0, i, i,300)
    makeLine(lienzo2, "green", i, 0, 300,i)
    makeLine(lienzo2, "green", 300, i, 300-i,300)
    makeLine(lienzo2, "green", 0, i, 300-i,0)
}

function makeLine(lienzo, color, xi, yi, xf, yf) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}
