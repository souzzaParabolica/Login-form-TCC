document.addEventListener("DOMContentLoaded", function () {
  const editButton = document.getElementById("edit-name");
  const nameDisplay = document.getElementById("name-display");
  const nameInput = document.getElementById("name-input");

  editButton.addEventListener("click", function () {
    // Alternar entre mostrar o texto e o input
    if (nameDisplay.classList.contains("hidden")) {
      // Salvar o novo nome e voltar para o modo de visualização
      nameDisplay.textContent = nameInput.value;
      nameDisplay.classList.remove("hidden");
      nameInput.classList.add("hidden");
    } else {
      // Entrar no modo de edição
      nameDisplay.classList.add("hidden");
      nameInput.classList.remove("hidden");
      nameInput.focus();
    }
  });

  // Opcional: Salvar quando pressionar Enter
  nameInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      nameDisplay.textContent = nameInput.value;
      nameDisplay.classList.remove("hidden");
      nameInput.classList.add("hidden");
    }
  });

  // Opcional: Salvar quando o input perder o foco
  nameInput.addEventListener("blur", function () {
    nameDisplay.textContent = nameInput.value;
    nameDisplay.classList.remove("hidden");
    nameInput.classList.add("hidden");
  });
});

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
      "#switch",
      {
        scale: 0.8,
        opacity: 0,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.2"
    )
    .from(
      ".item",
      {
        stagger: 0.15, // Intervalo entre itens
        y: 30,
        opacity: 0,
        ease: "back.out(1.2)",
      },
      "-=0.1"
    );
});

