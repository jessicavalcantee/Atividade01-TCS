class Aluno {
  constructor(nome, idade, nota, curso) {
    this.nome = nome;
    this.idade = idade;
    this.nota = nota;
    this.curso = curso;
  }
  
  isAprovado() {
    return this.nota >= 7;
  }

 toString() {
    return `Nome: ${this.nome} Idade: ${this.idade} Nota: ${this.nota} Curso: ${this.curso}`;
  }
  
}

// Cria um array para armazenar os alunos
const alunos = [];


document.querySelector('form').addEventListener('submit', function (event) { 
  event.preventDefault(); // Impede o envio do formulário 

//Pega os dados do formulário
const nome = document.getElementById('nome').value;
const idade = document.getElementById('idade').value;
const nota = document.getElementById('nota').value;
const curso = document.getElementById('curso').value;

// Verificador de campos vazios
if (!nome || !idade || !nota || !curso) {
  alert("Preencha todos os campos!");
  return;
}

//Cria um novo aluno e adiciona na lista
const aluno = new Aluno(nome, idade, nota, curso);
alunos.push(aluno);
console.log(aluno.toString());
console.log(alunos);

const mensagemAprovado = document.getElementById("mensagem-aprovado");
if (aluno.isAprovado()) {
  mensagemAprovado.innerHTML = `<p>${aluno.nome} está aprovado!</p>`;
}
else {
  mensagemAprovado.innerHTML = `<p>${aluno.nome} está reprovado!</p>`;
}

atualizarTabela();

event.target.reset(); // Limpa o formulário após o envio
});
  
function atualizarTabela() {
  const tabela = document.getElementById('table');
  tabela.innerHTML = ''; // Limpa a tabela antes de adicionar os alunos

  alunos.forEach((aluno, index) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${aluno.nome}</td>
      <td>${aluno.idade}</td>
      <td>${aluno.nota}</td>
      <td>${aluno.curso}</td>
      <td><button class="excluir">Remover</button></td>
      <td><button class="editar">Editar</button></td>
      <td>${aluno.isAprovado() ? "Aprovado" : "Reprovado"}</td>
    `;
    tabela.appendChild(linha);

    // Adiciona o evento de clique para o botão de remover
    linha.querySelector('.excluir').addEventListener('click', () => {
      removerAluno(index); 
    });
    
    // Adiciona o evento de clique para o botão de editar 
    linha.querySelector('.editar').addEventListener('click', () => {
      editarAluno(index); 
    });
  });

  const removerAluno = (index) => {
    const alunoRemovido = alunos[index];
    alunos.splice(index, 1);
    atualizarTabela();
    console.log('Aluno ${alunoRemovido.nome} foi removido.');
  }

  const editarAluno = (index) => {
    const aluno = alunos[index];
    document.getElementById('nome').value = aluno.nome;
    document.getElementById('idade').value = aluno.idade;
    document.getElementById('nota').value = aluno.nota;
    document.getElementById('curso').value = aluno.curso;
    // Remove o aluno da lista para evitar duplicação
    alunos.splice(index, 1);
    atualizarTabela();

    const form = document.querySelector('form');
    const botaoCadastrar = form.querySelector('input[type="submit"]');
    botaoCadastrar.value = "Atualizar"; // Altera o texto do botão para "Atualizar"

    // Substitui o comportamento padrão do botão "Cadastrar"
  form.onsubmit = function (index) {
    const aluno = alunos[index];
    document.getElementById('nome').value = aluno.nome;
    document.getElementById('idade').value = aluno.idade;
    document.querySelector(`input[name="curso"][value="${aluno.curso}"]`).checked = true;
    document.getElementById('nota').value = aluno.nota;


    alunos[index] = new Aluno(nomeAtualizado, idadeAtualizada, cursoAtualizado, notaAtualizada);
    alert('Aluno foi editado com sucesso!');

    // Restaura o botão "Cadastrar" e o comportamento padrão
    botaoCadastrar.value = "Cadastrar";
    form.onsubmit = null;

    atualizarTabela();

  
    form.reset();
  };

}

//Relatorio dos aprovados
document.getElementById('aprovados').addEventListener('click', function () {
  const alunosAprovados = alunos.filter(aluno => aluno.isAprovado());
  const listaAprovados = alunosAprovados.map(aluno => aluno.tostring()).join('<br>');
  document.getElementById('relatorio-alunos').innerHTML = `<h2>Alunos Aprovados:</h2><p>${listaAprovados}</p>`;
});

//media das notas
document.getElementById('media-notas').addEventListener('click', () => {
  const mediaNotas = alunos.reduce((soma, aluno) => soma + parseFloat(aluno.nota), 0) / alunos.length;
  document.getElementById('relatorio-alunos').innerHTML = `<h2>Média das Notas Finais:</h2><p>${mediaNotas.toFixed(2)}</p>`;
});

//media das notas
document.getElementById('media-idades').addEventListener('click', () => {
  const mediaIdades = alunos.reduce((soma, aluno) => soma + parseFloat(aluno.idade), 0) / alunos.length;
  document.getElementById('relatorio-alunos').innerHTML = `<h2>Média das Idades:</h2><p>${mediaIdades.toFixed(2)}</p>`;
});

//Ordem alfabética
document.getElementById('alunos-ordem').addEventListener('click', () => {
  const nomesOrdenados = alunos.map(aluno => aluno.nome).sort().join('<br>');
  document.getElementById('relatorio-alunos').innerHTML = `<h2>Nomes em Ordem Alfabética:</h2><p>${nomesOrdenados}</p>`;
});

// Qtd de alunos por curso
document.getElementById('quantidade-por-curso').addEventListener('click', () => {
  const quantidadePorCurso = alunos.reduce((contador, aluno) => { //Usando contadpr
      contador[aluno.curso] = (contador[aluno.curso] || 0) + 1;
      return contador;
  }, {});
  const resultado = Object.entries(quantidadePorCurso)
      .map(([curso, quantidade]) => `${curso}: ${quantidade}`)
      .join('<br>');
  document.getElementById('relatorio-alunos').innerHTML = `<h2>Quantidade de Alunos por Curso:</h2><p>${resultado}</p>`;
});}
