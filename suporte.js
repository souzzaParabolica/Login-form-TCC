document.addEventListener("DOMContentLoaded", function () {
  // Animação principal com timeline
  const tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "power2.out",
    },
  });

  // Animação em sequência dos elementos
  tl.from(".header", {
    y: -30,
    opacity: 0,
    duration: 0.7,
  })
    .from(
      ".subtitulo",
      {
        y: 20,
        opacity: 0,
        ease: "back.out(1.2)",
      },
      "-=0.3"
    ) // Sobreposição de 0.3s com a animação anterior
    .from(
      ".item",
      {
        stagger: 0.15, // Intervalo entre itens
        y: 30,
        opacity: 0,
        ease: "back.out(1.2)",
      },
      "-=0.5"
    );
});
