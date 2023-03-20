const answer = document.getElementById('answer') as HTMLButtonElement;
const answer_input = document.getElementById('answer_input') as HTMLInputElement;
const reload = document.getElementById('reload') as HTMLButtonElement;
const img = document.querySelector('img') as HTMLImageElement;
let erros = 0;
let acertos = 0;
img.setAttribute('width', '200px');
img.setAttribute('height', '200px');

let numero = Math.floor(Math.random() * 807) + 1 as number;

let pokemonsSorteados = [] as number[];
pokemonsSorteados.push(numero);

async function aleatorio(numero: number): Promise<void> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);
  const data = await response.json();
  img.setAttribute('src', data.sprites.front_default);
  }

resetar();

function resetar(): void {
  document.querySelector('span')!.innerHTML = '';
  document.getElementById('imgpokemon')!.className = '';
  numero = Math.floor(Math.random() * 807) + 1;
  aleatorio(numero);
  }

async function Answering() : Promise<void>{
  const resposta = document.querySelector('input')!.value.trim();
  if (resposta.length) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);
    const data = await response.json();

    if (resposta.toLowerCase() === data.name.toLowerCase()) {
      acertos++;
      acertos==1?(document.querySelector('.acertos') as HTMLDivElement).innerHTML = `Parabéns! Você acertou ${acertos} vez` : (document.querySelector('.acertos') as HTMLDivElement).innerHTML = `Parabéns! Você acertou ${acertos} vezes`;
 (document.querySelector('span') as HTMLSpanElement).innerHTML = `Parabéns! É o ${data.name}`;
  (document.getElementById('imgpokemon') as HTMLImageElement).className = 'acertou';
  (document.querySelector('input') as HTMLInputElement).value = '';
  setTimeout(resetar, 2000);
    } else {
      erros++;
      const erross = (document.querySelector('.erros') as HTMLDivElement).innerHTML = `Você errou ${erros} vezes`;
      (document.querySelector('span') as HTMLSpanElement).innerHTML = `Você errou! É o ${data.name}`;
      (document.getElementById('imgpokemon') as HTMLImageElement).className = 'errou';
      (document.querySelector('input') as HTMLInputElement).value = '';
      setTimeout(resetar, 2000);
    }
  } else {
    document.querySelector('span')!.innerHTML = 'Coloque o nome';
  }
}



answer.addEventListener('click', Answering);
answer_input.addEventListener('keydown', function (event) {
  if (event.which === 13) {
    console.log('enter');
    Answering();
  }
});

reload.addEventListener('click', resetar);

//fuction to create a background image changing every 5 seconds based in images ins JSON called data.json in assets/bg


async function changeBackground(): Promise<void> {
  const response = await fetch('./assets/bg/data.json');
  const data = await response.json();
  const container = document.querySelector('#container') as HTMLDivElement;
  let i = 0;

  setInterval(() => {
    container.style.backgroundImage = `url(${data[i].img})`;
    container.style.backgroundSize = 'cover';
    container.style.backgroundRepeat = 'no-repeat';

    i = (i + 1) % data.length; // Atualiza i para o próximo índice, reiniciando quando chegar ao final
  }, 5000);
}

changeBackground();


var videoFloat = document.getElementById("video-float") as HTMLElement;
var moveBtn = document.getElementById("move-btn") as HTMLElement;
var closeBtn = document.getElementById("close-btn") as HTMLElement;

moveBtn.addEventListener("mousedown", dragStart);

closeBtn.addEventListener("click", closeVideoFloat);

var startX = 0;
var startY = 0;
var offsetX = 0;
var offsetY = 0;

function dragStart(e : MouseEvent) {
  e.preventDefault();
  startX = e.clientX;
  startY = e.clientY;
  document.addEventListener("mousemove", dragMove);
  document.addEventListener("mouseup", dragEnd);
}

function dragMove(e : MouseEvent) {
  e.preventDefault();
  var dx = e.clientX - startX;
  var dy = e.clientY - startY;
  offsetX += dx;
  offsetY += dy;
  videoFloat.style.left = (videoFloat.offsetLeft + dx) + "px";
  videoFloat.style.top = (videoFloat.offsetTop + dy) + "px";
  startX = e.clientX;
  startY = e.clientY;
}

function dragEnd(e : MouseEvent) {
  e.preventDefault();
  document.removeEventListener("mousemove", dragMove);
  document.removeEventListener("mouseup ", dragEnd);
}

function closeVideoFloat(e : MouseEvent) {
  e.preventDefault();
  videoFloat.style.display = "none";
}
