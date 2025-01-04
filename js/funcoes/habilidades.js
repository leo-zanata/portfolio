function showTab(tabId) {
    // Esconder todos os conteúdos
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Desmarcar todas as abas
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => button.classList.remove('active'));
    
    // Mostrar o conteúdo selecionado
    document.getElementById(tabId).classList.add('active');
    
    // Ativar o botão selecionado
    event.currentTarget.classList.add('active');
}
