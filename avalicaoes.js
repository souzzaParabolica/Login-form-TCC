document.addEventListener("DOMContentLoaded", function () {
  // Estado inicial para animação
  gsap.set(".item", { opacity: 0, y: 20 });

  const tl = gsap.timeline({
    defaults: { duration: 0.6, ease: "back.out(1.2)" },
  });

  tl.to(".item", {
    stagger: 0.15,
    opacity: 1,
    y: 0,
  });

  const modal = document.getElementById("avaliacaoModal");
  const nomePratoSpan = document.getElementById("nomePrato");
  const btnCancelar = document.getElementById("cancelarAvaliacao");
  const btnConfirmar = document.getElementById("confirmarAvaliacao");

  let pratoSelecionado = null;

  function abrirModal(item) {
    pratoSelecionado = item;
    nomePratoSpan.textContent = item.querySelector(".item-title").textContent;
    modal.classList.remove("hidden");
    gsap.fromTo(
      modal,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
  }

  function fecharModal() {
    gsap.to(modal, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        modal.classList.add("hidden");
        pratoSelecionado = null;
      },
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModal();
  });

  btnCancelar.addEventListener("click", fecharModal);

  btnConfirmar.addEventListener("click", () => {
    if (!pratoSelecionado) return;

    fecharModal();

    gsap.to(pratoSelecionado, {
      height: 0,
      opacity: 0,
      margin: 0,
      padding: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        pratoSelecionado.remove();
        pratoSelecionado = null;
        bindTrashButtons(); // Reassocia os eventos pros botões restantes
      },
    });
  });

  function bindTrashButtons() {
    // Remove listeners antigos pra evitar múltiplos
    document.querySelectorAll(".item button[data-id]").forEach((btn) => {
      btn.replaceWith(btn.cloneNode(true));
    });

    // Agora associa o clique novamente
    document.querySelectorAll(".item button[data-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".item");
        abrirModal(item);
      });
    });
  }

  // Primeira associação
  bindTrashButtons();
});
