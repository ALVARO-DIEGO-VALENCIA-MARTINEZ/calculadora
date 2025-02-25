let pantalla = document.getElementById('pantalla');
let operador = '';
let resultado = 0;
let limpiarPantalla = false;

const actualizarPantalla = (valor) => {
  if (limpiarPantalla) {
    pantalla.value = valor;
    limpiarPantalla = false;
  } else {
    pantalla.value += valor;
  }
};

const calcular = () => {
  try {
    resultado = Function('return ' + pantalla.value)();
    pantalla.value = resultado;
  } catch (error) {
    pantalla.value = 'Error';
  }
};

const borrar = () => {
  pantalla.value = '';
  resultado = 0;
  limpiarPantalla = false;
};

document.getElementById('btn1').addEventListener('click', () => actualizarPantalla('1'));
document.getElementById('btn2').addEventListener('click', () => actualizarPantalla('2'));
document.getElementById('btn3').addEventListener('click', () => actualizarPantalla('3'));
document.getElementById('btn4').addEventListener('click', () => actualizarPantalla('4'));
document.getElementById('btn5').addEventListener('click', () => actualizarPantalla('5'));
document.getElementById('btn6').addEventListener('click', () => actualizarPantalla('6'));
document.getElementById('btn7').addEventListener('click', () => actualizarPantalla('7'));
document.getElementById('btn8').addEventListener('click', () => actualizarPantalla('8'));
document.getElementById('btn9').addEventListener('click', () => actualizarPantalla('9'));
document.getElementById('btn0').addEventListener('click', () => actualizarPantalla('0'));

document.getElementById('btnSuma').addEventListener('click', () => actualizarPantalla('+'));
document.getElementById('btnResta').addEventListener('click', () => actualizarPantalla('-'));
document.getElementById('btnMultiplicacion').addEventListener('click', () => actualizarPantalla('*'));
document.getElementById('btnDivision').addEventListener('click', () => actualizarPantalla('/'));

document.getElementById('btnIgual').addEventListener('click', calcular);

document.getElementById('btnBorrar').addEventListener('click', borrar);
