var imagenes = {
  Vaquiman: "../villaKEV/vaca.png",
  Pollito: "../villaKEV/pollo.png",
  Porquisaurio: "../villaKEV/cerdo.png",
};

class Pakiman {
  constructor(nombre, vida, ataque) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.imagen= new Image();
    this.imagen.src=imagenes[this.nombre];
  }
  
  hablar() {
    alert(this.nombre);
  }

  mostrar(){
      document.body.appendChild(this.imagen);
      document.write(`<p><strong>${this.nombre}</strong><br/>
                        Vida:${this.vida}<br/>
                        Ataque:${this.ataque}<br/><hr/>
                    </p>`);
  }
}

var vaquiman = new Pakiman("Vaquiman", 100, 28);
var pollito = new Pakiman("Pollito", 80, 48);
var porquisaurio = new Pakiman("Porquisaurio", 39, 100);

var coleccion=[];
coleccion.push(vaquiman);
coleccion.push(pollito);
coleccion.push(porquisaurio);

//for de array con in da la key
for(var pakiman in coleccion){
    coleccion[pakiman].mostrar();
}

//for de array con of da el value
for(var pakiman of coleccion){
    console.log(pakiman);
}