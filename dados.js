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


