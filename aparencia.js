document.addEventListener("DOMContentLoaded", function () {
  // ========================
  // Animações com GSAP
  // ========================

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

  // ========================
  // Modal de Restaurar
  // ========================

  const restaurarItem = document.querySelectorAll(".item")[2]; // Terceiro item: Restaurar
  const modal = document.getElementById("restaurarAparencia");
  const cancelarBtn = document.getElementById("cancelarRestauracao");
  const confirmarBtn = document.getElementById("confirmarRestauracao");
  const avisoRestaurado = document.getElementById("avisoRestaurado"); // Sucesso

  restaurarItem.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });

  cancelarBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  confirmarBtn.addEventListener("click", () => {
    localStorage.clear();

    modal.classList.add("hidden");
    modal.classList.remove("flex");

    mostrarAviso();
  });

  // Função para mostrar e sumir com aviso centralizado
  function mostrarAviso() {
    avisoRestaurado.style.pointerEvents = "auto";
    avisoRestaurado.classList.remove("opacity-0");
    avisoRestaurado.classList.add("opacity-100");

    setTimeout(() => {
      avisoRestaurado.classList.remove("opacity-100");
      avisoRestaurado.classList.add("opacity-0");
      avisoRestaurado.style.pointerEvents = "none";
    }, 3000);
  }
});
