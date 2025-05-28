function toggleMode() {
  const html = document.documentElement;
  const logoImage = document.getElementById("logo-image");

  // Inicia transição
  logoImage.classList.add("logo-transition");

  // Espera a transição de fade out terminar
  setTimeout(() => {
    html.classList.toggle("dark");

    // Alterna a imagem
    if (html.classList.contains("dark")) {
      logoImage.src = "img/VIVAICON-removebg-preview.png";
    } else {
      logoImage.src = "img/VIVAICON-removebg-preview.png";
    }

    // Remove a classe de transição após a troca
    setTimeout(() => {
      logoImage.classList.remove("logo-transition");
    }, 10);
  }, 100); // Tempo deve corresponder à duração da transição CSS

  // Atualiza o botão do switch
  const switchButton = document.querySelector("#switch button");
  switchButton.style.backgroundImage = html.classList.contains("dark")
    ? "url('img/sun.svg')"
    : "url('img/moon-stars.svg')";
}

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  const switchButton = document.querySelector("#switch button");
  if (!switchButton.style.backgroundImage) {
    switchButton.style.backgroundImage = "url('img/sun.svg')";
  }
});

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
