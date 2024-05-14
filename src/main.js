const descricoes = document.querySelectorAll('.descricao');
addEventListener('click', (event) => {
  const element = event.target;
  if (verificaClasse(element.classList.value)) {
    mostraNaTela(element, descricoes);
  };

});

const verificaClasse = (classe) => {
  if (classe == 'html' || classe == 'javaScript' || classe == 'css' || classe == 'react') return true;
  return false;
}

const mostraNaTela = (target, descricoes) => {
  descricoes.forEach(descricao => {
    const descricaoVerdadeira = descricao.classList.value.includes(target.classList.value);
    if (descricaoVerdadeira) {
      descricao.classList.add('visible');
    } else {
      descricao.classList.remove('visible');
    }
  });
}