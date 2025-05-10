function toggleMode() {
  const html = document.documentElement;
  const logoImage = document.getElementById("logo-image");

  // Inicia transição
  logoImage.classList.add("logo-transition");

  // Espera a transição de fade out terminar
  setTimeout(() => {
    html.classList.toggle("dark");

    // Alterna a imagem
    if (html.classList.contains("dark")) {
      logoImage.src = "img/LOGOBRANCA.png";
    } else {
      logoImage.src = "img/VIVAICON-removebg-preview.png";
    }

    // Remove a classe de transição após a troca
    setTimeout(() => {
      logoImage.classList.remove("logo-transition");
    }, 10);
  }, 100); // Tempo deve corresponder à duração da transição CSS

  // Atualiza o botão do switch
  const switchButton = document.querySelector("#switch button");
  switchButton.style.backgroundImage = html.classList.contains("dark")
    ? "url('img/sun.svg')"
    : "url('img/moon-stars.svg')";
}

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  const switchButton = document.querySelector("#switch button");
  if (!switchButton.style.backgroundImage) {
    switchButton.style.backgroundImage = "url('img/sun.svg')";
  }
});
