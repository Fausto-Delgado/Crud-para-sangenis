let numeros = [];
    
function generarNumero() {
  let numeroGenerado = Math.floor(Math.random() * 100) + 1;
  document.getElementById("numero").value = numeroGenerado;
}

function agregarNumero() {
  var numero = document.getElementById("numero").value;

  if (numero !== "") {
    let tabla = document.getElementById("tabla");
    let fila = tabla.insertRow(-1);
    let celda = fila.insertCell(0);
    celda.innerHTML = numero;


    numeros.push(parseInt(numero, 10));
  }
}

function calcularEstadisticas() {
  let promedio = calcularPromedio();
  let total = calcularTotal();
  let maximo = calcularMaximo();
  let minimo = calcularMinimo();

  document.getElementById("promedio").innerHTML = "Promedio: " + promedio;
  document.getElementById("total").innerHTML = "Total: " + total;
  document.getElementById("maximo").innerHTML = "Máximo: " + maximo;
  document.getElementById("minimo").innerHTML = "Mínimo: " + minimo;
}

function calcularPromedio() {
  if (numeros.length === 0) return 0;
  let sum = numeros.reduce(function (a, b) {
    return a + b;
  });
  return sum / numeros.length;
}

function calcularTotal() {
  if (numeros.length === 0) return 0;
  return numeros.reduce(function (a, b) {
    return a + b;
  });
}

function calcularMaximo() {
  if (numeros.length === 0) return 0;
  return Math.max(...numeros);
}

function calcularMinimo() {
  if (numeros.length === 0) return 0;
  return Math.min(...numeros);
}