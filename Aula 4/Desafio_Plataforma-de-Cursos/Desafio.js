
const botoes = document.querySelectorAll('.btn-matricular');

botoes.forEach((botao) => {
    botao.addEventListener('click', function() {
        const card = this.closest('.card');
        
        card.classList.toggle('card-selecionado');
        
        if (card.classList.contains('card-selecionado')) {
            this.textContent = "Matriculado com Sucesso!";
            this.style.backgroundColor = "#27ae60";
        } else {
            this.textContent = "Matricular";
            this.style.backgroundColor = "#3498db";
        }
    });
});