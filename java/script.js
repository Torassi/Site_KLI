// JavaScript para rolagem suave nas seções
document.querySelectorAll('.navbar .opcao').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede a navegação padrão (pular diretamente para a seção)
        
        const targetId = this.getAttribute('href').substring(1); // Obtém o id da seção de destino
        const targetSection = document.getElementById(targetId); // Localiza a seção pelo id
        
        // Anima a rolagem suave até a seção
        targetSection.scrollIntoView({
            behavior: 'smooth', // Rolagem suave
            block: 'start' // Inicia a rolagem no topo da seção
        });
    });
});
