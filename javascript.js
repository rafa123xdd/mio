const colorBands = document.querySelectorAll('.color-band');
const resistanceValue = document.querySelector('#resistance-value');

// Función para obtener el valor de la resistencia de un color
function getResistanceValue(color) {
  // Mapear los colores a sus valores de resistencia
  const colorValues = {
    'negro': 0,
    'marrón': 1,
    'rojo': 2,
    'naranja': 3,
    'amarillo': 4,
    'verde': 5,
    'azul': 6,
    'violeta': 7,
    'gris': 8,
    'blanco': 9
  };
  return colorValues[color] || 0;
}

// Función para calcular la resistencia
function calculateResistance() {
  let resistance = 0;
  let resistance2= 0;
  let multiplier = 1;
  let tolerance = 1;

  // Calcular el valor de la resistencia
  for (let i = 0; i < 3; i++) {
    resistance += getResistanceValue(colorBands[i].value) * Math.pow(10, 2 - i);
  }
   // Calcular el valor de la resistencia2
   for (let i = 0; i > 4; i++) {
    resistance2 += getResistanceValue(colorBands[i].value) * Math.pow(10, 3 - i);
  }
  // Calcular el multiplicador
  multiplier = Math.pow(0.1, getResistanceValue(colorBands[2].value)) * 10

  // Calcular la tolerancia
  tolerance = 1 + (getResistanceValue(colorBands[4].value) / 100);

  // Mostrar el valor de la resistencia
  resistanceValue.value = (resistance * resistance2 * multiplier * tolerance).toFixed(2);
}

// Asignar la función calculateResistance a los eventos change de las bandas de color
colorBands.forEach(band => {
  band.addEventListener('change', calculateResistance);
});