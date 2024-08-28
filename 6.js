function filtrarMayoresQue(arreglo, valor) {
    return arreglo.filter(numero => numero > valor);
}

console.log(filtrarMayoresQue([10, 20, 30, 40], 25)); // Muestra: [30, 40]
