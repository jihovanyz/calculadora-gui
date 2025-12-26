function calcular() {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);

  if (isNaN(n1) || isNaN(n2)) {
    alert('Ingresa ambos números');
    return;
  }

  const operacion = document.querySelector('input[name="operacion"]:checked');

  if (!operacion) {
    alert('Selecciona una operación');
    return;
  }

  let resultado;

  switch (operacion.value) {
    case 'suma':
      resultado = n1 + n2;
      break;
    case 'resta':
      resultado = n1 - n2;
      break;
    case 'multiplicacion':
      resultado = n1 * n2;
      break;
    case 'division':
      if (n2 === 0) {
        alert('No se puede dividir entre 0');
        return;
      }
      resultado = n1 / n2;
      break;
  }

  alert('Resultado: ' + resultado);
}
