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

  // --- Código novo: Modal para "Limpar dados" ---
  const modal = document.getElementById("limparDados");
  const btnCancelar = document.getElementById("cancelarLimpeza");
  const btnConfirmar = document.getElementById("confirmarLimpeza");

  // Pega o item "Limpar dados" pelo texto do título
  const limparDadosItem = [...document.querySelectorAll(".item")].find(
    (item) => {
      const titulo = item.querySelector(".item-title");
      return titulo && titulo.textContent.trim() === "Limpar dados";
    }
  );

  // Função para abrir modal com fade-in GSAP
  function abrirModal() {
    modal.classList.remove("hidden");
    gsap.fromTo(
      modal,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
  }

  // Função para fechar modal com fade-out GSAP
  function fecharModal() {
    gsap.to(modal, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        modal.classList.add("hidden");
      },
    });
  }

  // Abre modal ao clicar no item "Limpar dados"
  if (limparDadosItem) {
    limparDadosItem.addEventListener("click", abrirModal);
  }

  // Fecha modal ao clicar no botão cancelar
  btnCancelar.addEventListener("click", fecharModal);

  // Ao confirmar limpeza, mostra alert e fecha modal
  btnConfirmar.addEventListener("click", () => {
    alert("Seus dados foram apagados com sucesso! 💥");
    fecharModal();
    // Aqui você pode chamar funções para limpar dados reais, tipo localStorage.clear()
  });

  // Fecha modal clicando fora da caixa (background)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModal();
  });
});
