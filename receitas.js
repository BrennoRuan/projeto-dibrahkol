document.addEventListener('DOMContentLoaded', function() {
    const botoesReceita = document.querySelectorAll('.ver-receita-btn');
    const modais = document.querySelectorAll('.modal');

    botoesReceita.forEach((botao, index) => {
        botao.addEventListener('click', function() {
            const target = botao.getAttribute('data-target');
            document.getElementById(target).style.display = 'block';
        });
    });

    modais.forEach(modal => {
        modal.getElementsByClassName('fechar')[0].addEventListener('click', function() {
            modal.style.display = 'none';
        });
    });
});
