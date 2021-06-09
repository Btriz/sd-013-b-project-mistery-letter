// _____________________CLASSES_______________________
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function classeEstilo() {
  const estilo = random(1, 3);
  switch(estilo) {
    case 1:
      return('newspaper');
    case 2:
      return('magazine1');
    case 3:
      return('magazine2');
  }
}

function classeTamanho() {
  const tamanho = random(1, 3);
  switch(tamanho) {
    case 1:
      return('medium');
    case 2:
      return('big');
    case 3:
      return('reallybig');
  }
}

function terceiraClasse() {
  const classe = random(1, 2);
  if (classe === 1) {
    return(classeRotacao());
  } else {
    return(classeInclinacao());
  }
}

function classeRotacao() {
  const rotacao = random(1, 2);
  if (rotacao === 1) {
    return ('rotateleft');
  } else {
    return ('rotateright');
  }
}

function classeInclinacao() {
  const rotacao = random(1, 2);
  if (rotacao === 1) {
    return('skewleft');
  } else {
    return('skewright');
  }
}

function estilo(event) {
  let classe = '';
  event.target.className = '';
  classe = classeEstilo();
  event.target.classList.add(classe);
  classe = classeTamanho();
  event.target.classList.add(classe);
  classe = terceiraClasse();
  event.target.classList.add(classe);
}

// _____________________CRIAR CARTA_______________________
const botaoCriar = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');
const contador = document.getElementById('carta-contador');
let numero = 0;

function criarCarta(texto) {
  let palavraAtual = '';
  for (let index = 0; index < (texto.length + 1); index += 1) {
    if (texto[index] !== ' ' && texto[index] !== undefined) {
      palavraAtual += texto[index];
    } else {
      const palavra = document.createElement('span');
      let classe;
      palavra.innerText = palavraAtual;
      classe = classeEstilo();
      palavra.classList.add(classe);
      classe = classeTamanho();
      palavra.classList.add(classe);
      classe = terceiraClasse();
      palavra.classList.add(classe);
      palavra.addEventListener('click', estilo);
      paragrafo.appendChild(palavra);
      palavraAtual = '';
      numero += 1;
      contador.innerHTML = numero;
    }
  }
}

function verificar() {
  const texto = document.getElementById('carta-texto').value;
  numero = 0;
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
