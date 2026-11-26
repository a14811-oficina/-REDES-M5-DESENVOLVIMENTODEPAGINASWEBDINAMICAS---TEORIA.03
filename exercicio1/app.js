const evento = {
  nome: "Web Summit 2026",
  cidade: "Lisboa, Portugal",
  mensagem: "Bem-vindo ao futuro da tecnologia!"
  
};

const botao = document.querySelector("#atualizar");

botao.addEventListener("click", () => {
  document.querySelector("#titulo").textContent =
    evento.nome;

  document.querySelector("#local").textContent =
    evento.cidade;
});
  document.querySelector("#mensagem").textContent =
    evento.mensagem;

    botao.addEventListener("click", () => {
  document.querySelector("#nome").textContent =
    evento.nome;

  document.querySelector("#cargo").textContent =
    evento.cidade;

  document.querySelector("#descrição").textContent =
    evento.mensagem;
});
