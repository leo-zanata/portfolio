document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    pt: {
      home: "Início",
      about: "Sobre",
      abilities: "Habilidades",
      projects: "Projetos",
      experience: "Experiências",
      contact: "Contato",
      language: "English", // Nome do botão para mudar para inglês
    },
    en: {
      home: "Home",
      about: "About",
      abilities: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      language: "Português", // Nome do botão para mudar para português
    },
  };

  // Obtém o idioma salvo ou define como 'pt' (português)
  let currentLang = localStorage.getItem("language") || "pt";

  function renderMenu() {
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
              <a href="home.html"> <i class="bi bi-house"></i> ${translations[currentLang].home} </a>
            </div>
          </div>

          <div class="main-container">
            <div class="main-content">
              <a href="about.html"> <i class="bi bi-file-person-fill"></i> ${translations[currentLang].about} </a>
            </div>
          </div>

          <div class="main-container">
            <div class="main-content">
              <a href="abilities.html"> <i class="bi bi-person-gear"></i> ${translations[currentLang].abilities} </a>
            </div>
          </div>

          <div class="main-container">
            <div class="main-content">
              <a href="projects.html"> <i class="bi bi-lightbulb"></i> ${translations[currentLang].projects} </a>
            </div>
          </div>

          <div class="main-container">
            <div class="main-content">
              <a href="experience.html"> <i class="bi bi-journal-text"></i> ${translations[currentLang].experience} </a>
            </div>
          </div>

          <div class="main-container">
            <div class="main-content">
              <a href="contact.html"> <i class="bi bi-people-fill"></i> ${translations[currentLang].contact} </a>
            </div>
          </div>
        </div>
      </div>
    `;

    // Atualiza o texto do botão de idioma na página principal
    const languageToggle = document.getElementById("languageToggle");
    if (languageToggle) {
      languageToggle.textContent = translations[currentLang].language;
    }

    // Lógica para alternar o menu
    const menuToggle = document.getElementById("menuToggle");
    const menuContent = document.getElementById("menuContent");

    menuToggle.addEventListener("click", () => {
      menuContent.classList.toggle("show");
    });
  }

  // Renderiza o menu ao carregar a página
  renderMenu();

  // Adiciona evento de clique ao botão de tradução
  document.getElementById("languageToggle").addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    localStorage.setItem("language", currentLang);
    renderMenu(); // Re-renderiza o menu com o novo idioma
  });
});
