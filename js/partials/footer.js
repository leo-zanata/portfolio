document.addEventListener("DOMContentLoaded", function () {
    const translations = {
      pt: "&copy; 2024-2025 PORTFÓLIO DE LEONARDO ZANATA",
      en: "&copy; 2024-2025 LEONARDO ZANATA'S PORTFOLIO",
    };
  
    // Obtém o idioma salvo ou define como 'pt' (português)
    let currentLang = localStorage.getItem("language") || "pt";
  
    function renderFooter() {
      document.getElementById("footer").innerHTML = `
        <div id="footer_copyright">
          ${translations[currentLang]}
        </div>
      `;
    }
  
    // Insere o footer na página
    document.body.insertAdjacentHTML("beforeend", '<footer id="footer"></footer>');
  
    // Renderiza o footer
    renderFooter();
  
    // Atualiza o footer ao mudar de idioma
    document.getElementById("languageToggle").addEventListener("click", () => {
      currentLang = localStorage.getItem("language") || "pt";
      renderFooter();
    });
  });
  