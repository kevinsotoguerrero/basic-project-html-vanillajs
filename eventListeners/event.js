document.addEventListener("keydown", dibujarConTeclado);
document.addEventListener("mousemove", dibujarConCtrl);
document.addEventListener("mousemove", dibujarConClick);
var areaDibujo = document.getElementById("areaDibujo").getContext("2d");
var ancho = document.getElementById("areaDibujo").width;
var alto = document.getElementById("areaDibujo").height;
var posicionX = parseInt(ancho / 2);
var posicionY = parseInt(alto / 2);
var movimiento = 5;
var color = "green";
var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

function dibujarConTeclado(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      makeLine(
        areaDibujo,
        color,
        posicionX,
        posicionY,
        posicionX,
        posicionY - movimiento
      );
      if (posicionY > 0) {
        posicionY = posicionY - movimiento;
      }
      break;
    case teclas.DOWN:
      makeLine(
        areaDibujo,
        color,
        posicionX,
        posicionY,
        posicionX,
        posicionY + movimiento
      );
      if (posicionY < alto) {
        posicionY = posicionY + movimiento;
      }
      break;
    case teclas.LEFT:
      makeLine(
        areaDibujo,
        color,
        posicionX,
        posicionY,
        posicionX - movimiento,
        posicionY
      );
      if (posicionX > 0) {
        posicionX = posicionX - movimiento;
      }
      break;
    case teclas.RIGHT:
      makeLine(
        areaDibujo,
        color,
        posicionX,
        posicionY,
        posicionX + movimiento,
        posicionY
      );
      if (posicionX < ancho) {
        posicionX = posicionX + movimiento;
      }
      break;
  }
}

function makeLine(lienzo, color, xi, yi, xf, yf) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarConCtrl(evento){
    if(evento.ctrlKey===true){
        if(evento.target.id==="areaDibujo"){
            makeLine(areaDibujo, color, evento.offsetX, evento.offsetY, evento.offsetX+1, evento.offsetY+1);
        }
    }
}

function dibujarConClick(evento){
    if(evento.buttons===1){
        if(evento.target.id==="areaDibujo"){
            makeLine(areaDibujo, color, evento.offsetX, evento.offsetY, evento.offsetX+1, evento.offsetY+1);
        }
    }
}
