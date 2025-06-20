document.addEventListener("DOMContentLoaded", function () {
  // Animação principal
  const tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "power2.out",
      opacity: 0,
      y: 20,
    },
  });

  // Anima todos os itens com stagger
  tl.from(".item", {
    stagger: 0.15, // Intervalo de 0.15s entre cada item
    duration: 0.6,
    y: 30,
    opacity: 0,
    ease: "back.out(1.2)", // Efeito elástico sutil
  });

  // Animação adicional para o header (opcional)
  gsap.from(".header", {
    duration: 0.8,
    y: -30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
  });

});
