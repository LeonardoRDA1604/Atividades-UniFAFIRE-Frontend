export class AlunoAcademico {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = Number(nota);
  }

  verificarStatus() {
    return this.nota >= 7 ? 'Aprovado' : 'Reprovado';
  }
}