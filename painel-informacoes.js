document.addEventListener("DOMContentLoaded", function () {
  // --- Animação GSAP ---
  const tl = gsap.timeline({
    defaults: { duration: 0.5, ease: "power2.out", opacity: 0, y: 20 },
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

  // --- Abrir modais comuns ---
  document.querySelectorAll(".open-modal").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const modal = document.getElementById(targetId);

      modal.classList.remove("hidden");

      gsap.fromTo(
        `#${targetId} .modalbox`,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.5)" }
      );
    });
  });

  // --- Abrir modal de dias ao clicar no título ---
  document.querySelectorAll(".dia-da-semana").forEach((dia) => {
    dia.addEventListener("click", () => {
      const modal = document.getElementById("diasModal");
      modal.classList.remove("hidden");

      gsap.fromTo(
        "#diasModal .modalbox",
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.5)" }
      );
    });
  });

  // --- Fechar modal ao clicar fora ---
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        gsap.to(`#${modal.id} .modalbox`, {
          scale: 0.8,
          opacity: 0,
          y: 50,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => modal.classList.add("hidden"),
        });
      }
    });
  });

  // --- Botão "Cancelar" do modal de dias ---
  const cancelarBtn = document.querySelector("#diasModal #cancelar");
  if (cancelarBtn) {
    cancelarBtn.addEventListener("click", () => {
      const modal = document.getElementById("diasModal");
      gsap.to("#diasModal .modalbox", {
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => modal.classList.add("hidden"),
      });
    });
  }
});
