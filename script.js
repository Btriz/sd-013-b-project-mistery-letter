// _____________________CLASSES_______________________
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function classeEstilo() {
  const estilo = random(1, 3);
  switch (estilo) {
  case 1:
    return ('newspaper');
  case 2:
    return ('magazine1');
  default:
    return ('magazine2');
  }
}

function classeTamanho() {
  const tamanho = random(1, 3);
  switch (tamanho) {
  case 1:
    return ('medium');
  case 2:
    return ('big');
  default:
    return ('reallybig');
  }
}

function classeRotacao() {
  const rotacao = random(1, 2);
  if (rotacao === 1) {
    return ('rotateleft');
  } return ('rotateright');
}

function classeInclinacao() {
  const rotacao = random(1, 2);
  if (rotacao === 1) {
    return ('skewleft');
  } return ('skewright');
}

function terceiraClasse() {
  const classe = random(1, 2);
  if (classe === 1) {
    return (classeRotacao());
  } return (classeInclinacao());
}

let classe1;
let classe2;
let classe3;

function mudarClasses(event) {
  const palavra = event.target;
  classe1 = classeEstilo();
  classe2 = classeTamanho();
  classe3 = terceiraClasse();
  palavra.className = '';
  palavra.classList.add(classe1, classe2, classe3);
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
      palavra.innerText = palavraAtual;
      classe1 = classeEstilo();
      classe2 = classeTamanho();
      classe3 = terceiraClasse();
      palavra.classList.add(classe1, classe2, classe3);
      palavra.addEventListener('click', mudarClasses);
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
