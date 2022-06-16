const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");
const buttonPergunta = document.querySelector("#buttonPerguntar");

const respostas = [
  "Acho que não pensei direito. Pergunte de novo.",
  "Melhor não saber dessa. Triste saber coisas antes de acontecerem. aff",
  "Sim, isso vai rolar!",
  "Não conte com isso, lindeza!",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  "Se eu fosse você, não esperaria por isso.",
  "Só tentando pra você descobrir. Adianto que vai dar bom. haha",
];

console.log("entrou");

function fazerPergunta() {
  if (inputPergunta.value == "") {
    alert("Escreve uma pergunta né, colega.");
    return;
  }

  buttonPerguntar.setAttribute("disabled", true);
  const pergunta = "<div>" + inputPergunta.value + "</div>";

  const totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];

  elementoResposta.style.opacity = 1;

  // Adiciona a class fadeIn e é chamada la no css
  elementoResposta.classList.add("fadeIn");

  setTimeout(function () {
    elementoResposta.style.opacity = 0;

    // Adiciona a class fadeOut e é chamada la no css
    elementoResposta.classList.add("fadeOut");

    buttonPerguntar.removeAttribute("disabled", false);
  }, 3000);
}