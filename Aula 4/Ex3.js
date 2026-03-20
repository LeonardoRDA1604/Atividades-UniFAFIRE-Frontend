const botao = document.getElementById('Botao');
const caixa = document.getElementById('Caixa');

botao.addEventListener('click', function() {

    caixa.classList.toggle('nova-cor');
    
    if (caixa.classList.contains('nova-cor')) {
        botao.textContent = "Voltar Cor Original";
    } else {
        botao.textContent = "Mudar Cor da Caixa";
    }
});