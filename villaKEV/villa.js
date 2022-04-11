document.addEventListener("keydown", moverCerdoTeclado);
var vk = document.getElementById("villaKEV");
var espacioDibujo = vk.getContext("2d");
var fondo = {
  url: "tile.png",
  cargaOK: false,
  objeto: new Image(),
  posicionX: 0,
  posicionY: 0,
};
var vaca = {
  url: "vaca.png",
  cargaOK: false,
  objeto: new Image(),
  posicionX: aleatorio(0, 420),
  posicionY: aleatorio(0, 420),
};
var pollo = {
  url: "pollo.png",
  cargaOK: false,
  objeto: new Image(),
  posicionX: aleatorio(0, 420),
  posicionY: aleatorio(0, 420),
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
  objeto: new Image(),
  posicionX: aleatorio(0, 420),
  posicionY: aleatorio(0, 420),
};
var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargar);

cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargar);

pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargar);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargar() {
  dibujar();
}

function dibujar() {
  if (fondo.cargaOK) {
    espacioDibujo.drawImage(fondo.objeto, fondo.posicionX, fondo.posicionY);
    espacioDibujo.drawImage(vaca.objeto, vaca.posicionX, vaca.posicionY);
    espacioDibujo.drawImage(pollo.objeto, pollo.posicionX, pollo.posicionY);
    espacioDibujo.drawImage(cerdo.objeto, cerdo.posicionX, cerdo.posicionY);
  }
}

function aleatorio(min, max) {
  var resultado = Math.round(Math.random() * (max - min) + min);
  return resultado;
}

function moverCerdoTeclado(evento) {
  switch (evento.keyCode) {
    case teclas.DOWN:
        cerdo.posicionY=cerdo.posicionY+5;
      dibujar();
      break;
    case teclas.UP:
        cerdo.posicionY=cerdo.posicionY-5;
      dibujar();
      break;
    case teclas.LEFT:
        cerdo.posicionX=cerdo.posicionX-5;
      dibujar();
      break;
    case teclas.RIGHT:
        cerdo.posicionX=cerdo.posicionX+5;
      dibujar();
      break;
  }
}
