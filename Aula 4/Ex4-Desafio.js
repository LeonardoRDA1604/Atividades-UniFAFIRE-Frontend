const botao = document.getElementById('btnCor');
const card = document.getElementById('cardInterativo');

botao.addEventListener('click', () => {
    card.classList.toggle('card-ativo');
    
    if (card.classList.contains('card-ativo')) {
        botao.textContent = "Resetar Estilo";
        botao.style.backgroundColor = "#27ae60";
    } else {
        botao.textContent = "Mudar Estilo";
        botao.style.backgroundColor = "#333";
    }
});