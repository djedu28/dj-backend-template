# DJ Backend Template

Este é um template para criar backend APIs em NodeJS seguindo as melhores práticas de desenvolvimento que aprendi ao longo dos anos.

## 👨🏼‍💻 PROGRAMADORes

- [Eduardo Santos (@DjEdu28)](https://github.com/djedu28)

## 🚀 Tecnologias

- ⚡ NodeJS
- 💾 Sequelize
- 🗄 PostgreSQL

## Pré-requisitos

- Node.js e Yarn instalados
- PostgreSQL instalado e rodando
caso tenha dificuldades para instalar as dependências: consulte o arquivo [dj_notas/instalando-dependencias.md](./dj_notas/instalando-dependencias.md)

## Instalação

1. Clone este repositório
2. Execute `yarn` para instalar as dependências
3. Crie um arquivo `.env` com as variáveis de ambiente necessárias (veja `.env.example` para um exemplo)
4. Execute `yarn dev` para iniciar o servidor em modo de desenvolvimento

## Scripts disponíveis

- `yarn dev`: inicia o servidor em modo de desenvolvimento
- `yarn start`: inicia o servidor em modo de produção
- `yarn att`: atualiza as dependências para as versões mais recentes

## Estrutura de pastas

- `src/config`: arquivos de configuração
- `src/controllers`: controladores que lidam com as requisições HTTP
- `src/database`: arquivos relacionados ao banco de dados
- `src/models`: modelos de dados relacionados ao banco de dados
- `src/routes`: rotas da API
- `src/utils`: funções utilitárias
- `src/server.js`: arquivo principal do servidor

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Para utilizar como template

Utilizando a linha de comando:

```bash
git clone https://github.com/djedu28/dj-backend-template.git dj-backend
```

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
