function toggleMode() {
  const html = document.documentElement;

  // Alterna o modo
  html.classList.toggle("dark");

  // Atualiza o botão do switch
  const switchButton = document.querySelector("#switch button");
  if (html.classList.contains("dark")) {
    switchButton.style.backgroundImage = "url('img/moon-stars.svg')";
    localStorage.setItem("theme", "dark");
  } else {
    switchButton.style.backgroundImage = "url('img/sun.svg')";
    localStorage.setItem("theme", "light");
  }
}

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;
  const switchButton = document.querySelector("#switch button");

  // Verifica o tema salvo
  const savedTheme = localStorage.getItem("theme") || "light";

  if (savedTheme === "dark") {
    body.classList.add('dark');
    switchButton.style.backgroundImage = "url('img/moon-stars.svg')";
  } else {
    body.classList.remove("dark");
    switchButton.style.backgroundImage = "url('img/sun.svg')";
  }

  // Adiciona o evento de clique
  document.getElementById("switch").addEventListener("click", toggleMode);
});
