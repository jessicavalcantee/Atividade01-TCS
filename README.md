# Atividade01-TCS  -  Gerenciamento de Alunos - DevTech Academy

## Tecnologias Utilizadas

* HTML para estrutura do formulário e tabela
+ JavaScript para manipulação da DOM e armazenamento dos dados
* Git/GitHub para controle de versão
+ Docker para containerização do projeto

## Descrição do Projeto

Este projeto tem como objetivo criar um sistema simples de gerenciamento de alunos para a escola "DevTech Academy". O sistema permite o cadastro, edição, exclusão e listagem de alunos, além de gerar relatórios com base nos dados cadastrados.

## Funcionalidades Implementadas

### Formulário HTML com os campos:

+ Nome
* Idade.
+ Curso (JavaScript, Python, Java).
* Nota Final.
+ Cadastro de alunos em uma lista armazenada em memória.
* Exibição dos alunos em uma tabela.
+ Funcionalidade de edição e exclusão de alunos.

### Implementação da classe Aluno contendo:

* Atributos: nome, idade, curso, notaFinal.
+ Construtor para inicialização dos dados.
* Método ´isAprovado()´ para verificar se a notaFinal é maior ou igual a 7.
+ Método ´toString()´ para formatar os dados do aluno.

### Uso de addEventListener para manipulação de eventos.

### Utilização de funções anônimas e arrow functions.

### Exibição de mensagens via 'alert()' e 'console.log()' ao cadastrar, editar e excluir alunos.

### Implementação de relatórios interativos:

* Listagem de alunos aprovados.
+ Cálculo da média das notas finais.
* Cálculo da média das idades.
+ Ordenação de alunos por nome.
* Contagem de alunos por curso.

### Uso dos métodos 'filter', 'map', 'reduce', 'sort' e 'forEach' para manipulação dos dados.

## Como Executar o Projeto

 ### Via Docker

1. Certifique-se de ter o Docker instalado

2. Construa a imagem do projeto:

'docker build -t atividade01-web .'

3. Execute o container:

'docker run -p 8080:80 atividade01-web'

4. Acesse o sistema pelo navegador: http://localhost:8080
  
5. Clone o repositório:

'git clone https://github.com/jessicavalcantee/Atividade01-TCS.git'

