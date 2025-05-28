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


  document.addEventListener("DOMContentLoaded", function () {
    const reservarBtn = document.querySelector(".reservar");
    const modal = document.getElementById("reservaModal");
    const cancelarBtn = document.getElementById("cancelarReserva");
    const confirmarBtn = document.getElementById("confirmarReserva");
    const dataReserva = document.getElementById("dataReserva");

    // Função para formatar a data (opcional)
    function formatarData(data) {
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      return new Date(data).toLocaleDateString("pt-BR", options);
    }

    // Ao clicar no botão RESERVAR
    reservarBtn.addEventListener("click", function () {
      // Você pode definir a data dinamicamente aqui
      // const dataAtual = new Date();
      // dataReserva.textContent = formatarData(dataAtual);

      modal.classList.remove("hidden");
    });

    // Ao clicar em CANCELAR
    cancelarBtn.addEventListener("click", function () {
      modal.classList.add("hidden");
    });

    // Ao clicar em RESERVAR (confirmação)
    confirmarBtn.addEventListener("click", function () {
      modal.classList.add("hidden");
      // Aqui você pode adicionar a lógica para efetuar a reserva
      alert("Reserva confirmada para o dia " + dataReserva.textContent);
      // window.location.href = 'pagina-de-confirmacao.html';
    });

    // Fechar modal ao clicar fora dele
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });