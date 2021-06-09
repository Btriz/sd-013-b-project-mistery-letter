const botaoCriar = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');

function criarCarta(texto) {
  let palavraAtual = '';
  for (let index = 0; index < (texto.length + 1); index += 1) {
    if (texto[index] !== ' ' && texto[index] !== undefined) {
      palavraAtual += texto[index];
    } else {
      const palavra = document.createElement('span');
      palavra.innerText = palavraAtual;
      paragrafo.appendChild(palavra);
      palavraAtual = '';
    }
  }
}

function verificar() {
  const texto = document.getElementById('carta-texto').value;
  if (texto.trim() === '') {
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    paragrafo.innerText = '';
    while (paragrafo.childElementCount > 0) {
      paragrafo.removeChild(paragrafo.firstChild);
    }
    criarCarta(texto);
  }
}
botaoCriar.addEventListener('click', verificar);
