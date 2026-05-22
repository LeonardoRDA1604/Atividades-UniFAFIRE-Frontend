import React, { useState } from 'react';
import Layout from './components/Layout';
import TextInput from './components/TextInput';
import Button from './components/Button';
import { AlunoAcademico } from './classes/AlunoAcademico';

export default function App() {
  const [nome, setNome] = useState('');
  const [nota, setNota] = useState('');
  
  const [resultado, setResultado] = useState('');

  const handleProcessarDados = () => {
    if (!nome || !nota) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Atividade 1: Disparar alert de boas-vindas
    alert(`Bem-vindo(a), ${nome}!`);

    // Atividade 2: Instanciando a classe e verificando o status
    const aluno = new AlunoAcademico(nome, nota);
    const statusFinal = aluno.verificarStatus();

    setResultado(`O aluno ${aluno.nome} obteve a nota ${aluno.nota} e está: ${statusFinal}`);
  };

  return (
    <Layout titulo="Cadastro e Avaliação de Alunos">
      <div>
        <label>Nome do Aluno:</label>
        <TextInput 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          placeholder="Digite o nome do aluno" 
        />

        <label>Nota do Aluno:</label>
        <TextInput 
          type="number"
          value={nota} 
          onChange={(e) => setNota(e.target.value)} 
          placeholder="Digite a nota (0 a 10)" 
        />

        <Button onClick={handleProcessarDados}>
          Verificar Situação
        </Button>
      </div>

      {resultado && (
        <div style={{
          marginTop: '20px',
          padding: '12px',
          borderRadius: '4px',
          backgroundColor: resultado.includes('Aprovado') ? '#e6f4ea' : '#fce8e6',
          color: resultado.includes('Aprovado') ? '#137333' : '#c5221f',
          fontWeight: 'bold',
          border: '1px solid'
        }}>
          {resultado}
        </div>
      )}
    </Layout>
  );
}