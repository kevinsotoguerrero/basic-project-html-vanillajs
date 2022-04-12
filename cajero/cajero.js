document.getElementById("buttonExtraer").addEventListener("click", retiro);

var etiquetaResultado = document.getElementById("resultado");
var billetes = {
  billetes10: 1,
  billetes20: 0,
  billetes50: 4,
};

function retiro() {
  var valorRetiro = document.getElementById("dineroExtraer").value;

  var billetesCliente = {
    billetesCliente10: 0,
    billetesCliente20: 0,
    billetesCliente50: 0,
  };

  while (valorRetiro > 0) {
    if (valorRetiro >= 50 && billetes.billetes50 > 0) {
      billetesCliente.billetesCliente50++;
      billetes.billetes50--;
      valorRetiro = valorRetiro - 50;
    } else if (valorRetiro >= 20 && billetes.billetes20 > 0) {
      billetesCliente.billetesCliente20++;
      billetes.billetes20--;
      valorRetiro = valorRetiro - 20;
    } else if (valorRetiro >= 10 && billetes.billetes10 > 0) {
      billetesCliente.billetesCliente10++;
      billetes.billetes10--;
      valorRetiro = valorRetiro - 10;
    } else {
      return etiquetaResultado.innerHTML="transaccion no puede ser realizada<br/><hr/>";
    }
  }
  console.log(billetes);
  return mostrarTransaccion(billetesCliente);
}

function mostrarTransaccion(billetesCliente) {
  for (var billetes in billetesCliente) {
    etiquetaResultado.innerHTML+=billetes + ": " + billetesCliente[billetes] + "<br/>";
  }
  etiquetaResultado.innerHTML+="<hr/>"
}
