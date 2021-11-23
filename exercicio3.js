// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const expandClass = 'expandido'
const buttonsExpand = document.querySelectorAll('.botao-expandir-retrair');

buttonsExpand.forEach(button => {
  const { parentNode: paragraph } = button;

  button.onclick = () => {
    const willBeExpanded = !paragraph.classList.contains(expandClass);
    
    button.textContent = willBeExpanded ? '-':'+';
    paragraph.classList.toggle(expandClass);
  }
});
