
document.addEventListener("DOMContentLoaded", function () {
  // Timeline principal
  const tl = gsap.timeline({
    defaults: {
      duration: 0.6,
      ease: "power2.out",
    },
  });

  // Sequência de animações
  tl.from("#switch", {
    y: -30,
    opacity: 0,
    ease: "back.out(1.3)",
  })
    .from(
      ".button",
      {
        x: -30,
        opacity: 0,
        rotation: -15,
      },
      "-=0.2"
    )
    .from(
      ".title",
      {
        y: 20,
        opacity: 0,
      },
      "-=0.4"
    )
    .from(
      ".input-group",
      {
        stagger: 0.15,
        y: 30,
        opacity: 0,
        ease: "back.out(1.2)",
      },
      "-=0.3"
    )
    .from(
      ".sign",
      {
        scale: 0.9,
        opacity: 0,
        ease: "elastic.out(1, 0.7)",
      },
      "-=0.2"
    )
    .from(
      ".social-message",
      {
        y: 20,
        opacity: 0,
      },
      "-=0.3"
    );
});
