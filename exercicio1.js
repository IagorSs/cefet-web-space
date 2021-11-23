// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const { value: constant } = document.getElementById('constante');

const calcButton = document.getElementById('calcular');
calcButton.onclick = () => {
  const { value: mass1 } = document.getElementById('massa1');
  const { value: mass2 } = document.getElementById('massa2');
  const { value: dist } = document.getElementById('distancia');
  
  const resultElement = document.getElementById('resultado');
  resultElement.value = (constant * mass1 * mass2) / (dist**2);
}
