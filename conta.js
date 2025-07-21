document.addEventListener("DOMContentLoaded", function () {
  // ===== ANIMAÇÕES GERAL =====
  const tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "power2.out",
      opacity: 0,
      y: 20,
    },
  });

  tl.from(".item", {
    stagger: 0.15,
    duration: 0.6,
    y: 30,
    opacity: 0,
    ease: "back.out(1.2)",
  });

  gsap.from(".header", {
    duration: 0.8,
    y: -30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
  });

  // ===== MODAL DESCONECTAR =====
  const modalDesconectar = document.getElementById("desconectarConta");
  const cancelarDesconectar = document.getElementById("cancelarLogout");
  const confirmarDesconectar = document.getElementById("confirmarLogout");

  // ===== MODAL APAGAR =====
  const modalApagar = document.getElementById("apagarConta");
  const cancelarExclusao = document.getElementById("cancelarExclusao");
  const confirmarExclusao = document.getElementById("confirmarExclusao");

  // ===== PROCURA OS BOTÕES PELO TEXTO =====
  const items = document.querySelectorAll(".item-title");

  items.forEach((item) => {
    const parentItem = item.closest(".item");
    const texto = item.textContent.trim();

    if (texto === "Sair") {
      parentItem.addEventListener("click", () => {
        modalDesconectar.classList.remove("hidden");
      });

      cancelarDesconectar?.addEventListener("click", () => {
        modalDesconectar.classList.add("hidden");
      });

      confirmarDesconectar?.addEventListener("click", () => {
        alert("Conta desconectada com sucesso!");
        window.location.href = "entrar.html";
      });
    }

    if (texto === "Apagar") {
      parentItem.addEventListener("click", () => {
        modalApagar.classList.remove("hidden");
      });

      cancelarExclusao?.addEventListener("click", () => {
        modalApagar.classList.add("hidden");
      });

      confirmarExclusao?.addEventListener("click", () => {
        alert("Conta apagada com sucesso!");
        window.location.href = "index.html";
      });
    }
  });
});
