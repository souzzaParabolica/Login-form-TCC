document.addEventListener("DOMContentLoaded", function () {
  // Animação inicial dos itens e header com GSAP
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
});
