# Explorador de Repositórios GitHub

Uma aplicação Angular para buscar e explorar os repositórios mais populares do GitHub. Ao clicar em um repositório, você pode visualizar os pull requests associados a ele.

## Tecnologias Utilizadas

- **Angular**: Framework para construção de aplicações web.
- **Bootstrap**: Framework para estilização e design responsivo.
- **ngPagination**: Biblioteca para paginação.
- **Visual Studio Code**: Ambiente de desenvolvimento utilizado.

## Pré-requisitos

Antes de começar, você precisa ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (versão 14.x ou superior)
- [Angular CLI](https://angular.io/cli) (versão 14.x ou superior)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/usuario/repositorio.git
   cd repositorio

1. Instale as dependências do projeto:

   ```bash
   npm install

## Uso


Inicie o servidor de desenvolvimento:

1. Clone o repositório:

   ```bash
   ng serve

Acesse a aplicação em http://localhost:4200.

## Funcionalidades

- Buscar Repositórios: Aplique filtros e busque os repositórios mais populares do GitHub.
- Visualizar Repositórios: Clique em um repositório para ver detalhes e pull requests associados.
- Paginação: Navegue pelos resultados de busca com paginação usando ngPagination.
  
## Estrutura do Projeto

- **`src/app/core`**: Contém componentes e serviços essenciais, como o `footer` e o `navbar`.
- **`src/app/shared`**: Contém componentes reutilizáveis como `search`, `listing`, e `loader`.
- **`src/app/pages`**:
  - **`home`**: Página principal onde a busca de repositórios e resultados são exibidos.
  - **`pull-request`**: Página que exibe os pull requests para um repositório selecionado.
- **`src/app`**: Contém os componentes e serviços principais da aplicação.
- **`src/environments`**: Contém arquivos de configuração de ambiente.
- **`src/assets`**: Contém arquivos estáticos como imagens e estilos.
- **`src/styles.css`**: Contém estilos globais.

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Envie para o repositório remoto (`git push origin minha-feature`).
5. Abra um pull request.

## Contatos e Suporte

Para dúvidas ou suporte, conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/amanda-marques-furtado/).

   
