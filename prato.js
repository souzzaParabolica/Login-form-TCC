const tl = gsap.timeline({
  defaults: {
    duration: 0.6, // Duração um pouco menor
    ease: "power2.out",
  },
});

// Animação do primeiro elemento (mantém como referência)
tl.from(".prato-info", {
  y: 30,
  opacity: 0,
})

  // Segundo elemento - aparece mais rápido após o primeiro
  .from(
    ".descricao",
    {
      y: 30,
      opacity: 0,
    },
    "-=0.3"
  ) // Começa 0.3s ANTES do término da anterior (sobreposição)

  // Terceiro elemento - aparece quase junto com o segundo
  .from(
    ".avaliar-prato",
    {
      y: 30,
      opacity: 0,
    },
    "-=0.2"
  ); // Começa 0.2s após o início da anterior
