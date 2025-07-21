const toggleBtn = document.getElementById("tema");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", isDark); // Salva true ou false
  });
}
