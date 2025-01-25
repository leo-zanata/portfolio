document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu").innerHTML = `
      <div class="container">
        <div class="menu-toggle" id="menuToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="container-main" id="menuContent">
          <div class="main-container">
            <div class="main-content">
              <a href="home.html"> <i class="bi bi-house"></i> Início </a>
            </div>
          </div>

          <div class="main-container">
            <div class="main-content">
              <a href="about.html">
                <i class="bi bi-file-person-fill"></i> Sobre
              </a>
            </div>
          </div>

          <div class="main-container">
            <div class="main-content">
              <a href="abilities.html"> <i class="bi bi-person-gear"></i> Habilidades </a>
            </div>
          </div>

          <div class="main-container">
            <div class="main-content">
              <a href="projects.html">
                <i class="bi bi-lightbulb"></i> Projetos
              </a>
            </div>
          </div>

          <div class="main-container">
            <div class="main-content">
              <a href="experience.html">
                <i class="bi bi-journal-text"></i> Experiências
              </a>
            </div>
          </div>

          <div class="main-container">
            <div class="main-content">
              <a href="contact.html">
                <i class="bi bi-people-fill"></i> Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

  // Lógica para alternar o menu
  const menuToggle = document.getElementById("menuToggle");
  const menuContent = document.getElementById("menuContent");

  menuToggle.addEventListener("click", () => {
    menuContent.classList.toggle("show");
  });
});
