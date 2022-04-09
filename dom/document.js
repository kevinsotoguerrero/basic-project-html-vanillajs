var lienzo = document.getElementById("dibujoCanvas").getContext("2d");
var lienzo2 = document.getElementById("dibujoCanvas2").getContext("2d");
var buttonEnviar =document.getElementById("buttonEnviar");

var anchoLienzo2 = document.getElementById("dibujoCanvas2").width;

//poner el escuchador de eventos, el evento es el click y la funcion que llama es dibujarCanvas2
buttonEnviar.addEventListener("click", dibujarCanvas2);

makeLine(lienzo,"blue", 50, 0, 50, 300);
makeLine(lienzo,"blue", 50, 150, 150, 0);
makeLine(lienzo,"blue", 50, 150, 150, 300);
makeLine(lienzo,"red", 0, 0, 0, 300);
makeLine(lienzo,"red", 0, 0, 200, 0);
makeLine(lienzo,"red", 200, 300, 0, 300);
makeLine(lienzo,"red", 200, 300, 200, 0);

function dibujarCanvas2(){
  cantidadLineas=document.getElementById("inputLineas").value
  
  //el valor que trae del document es tipo string por lo cual el +1 queda como una concatenacion por eso hay que hacer el parseInt
  console.log(cantidadLineas+1)

  pxPorLinea=parseInt(anchoLienzo2/cantidadLineas)
  console.log(pxPorLinea+1)
  
  for(var i=0; i<=anchoLienzo2; i+=pxPorLinea ){
      makeLine(lienzo2, "green", 0, i, i,anchoLienzo2)
      makeLine(lienzo2, "green", i, 0, anchoLienzo2,i)
      makeLine(lienzo2, "green", anchoLienzo2, i, anchoLienzo2-i,anchoLienzo2)
      makeLine(lienzo2, "green", 0, i, anchoLienzo2-i,0)
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
