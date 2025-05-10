function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("dark");

  // Adiciona classe de transição
  body.classList.add("mode-transition");

  // Alterna modo escuro
  html.classList.toggle("dark");

  // Atualiza o botão do switch (opcional)
  const switchButton = document.querySelector("#switch button");
  switchButton.style.backgroundImage = html.classList.contains("dark")
    ? "url('img/moon-stars.svg')"
    : "url('img/sun.svg')";

  // Remove a classe após a animação
  setTimeout(() => {
    body.classList.remove("mode-transition");
  }, 600);
}

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  const switchButton = document.querySelector("#switch button");
  if (!switchButton.style.backgroundImage) {
    switchButton.style.backgroundImage = "url('img/sun.svg')";
  }
});
