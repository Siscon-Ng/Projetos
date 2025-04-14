# Projeto Cliente

Este projeto consiste em desenvolver telas utilizando Angular + PrimeNG para consumir uma API mock. A seguir, você encontrará instruções para inicializar o projeto, detalhes sobre as funcionalidades e requisitos.

## Instalação e Inicialização

1. **Clone o repositório:**

   ```bash
   git clone
   cd projeto-cliente
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o frontend:**

   ```bash
   npm run serve-cli
   ```

   Acesse o projeto no navegador pelo endereço `http://localhost:4200/`.

4. **Inicie o backend:**

```bash
   npm run serve-api
```

Acesse o projeto no navegador pelo endereço `http://localhost:3000/`.

## Funcionalidades da API

- **GET /clientes:** Lista todos os clientes
- **GET /clientes/:id:** Busca cliente por ID
- **POST /clientes:** Cria novo cliente
- **PUT /clientes/:id:** Atualiza cliente existente
- **DELETE /clientes/:id:** Remove cliente

## Requisitos da Tarefa

### Funcionalidades Obrigatórias

- **Tela de Login**

  - Formulário com validação
  - Autenticação via `/auth/login`
  - Armazenar token no localStorage
  - Redirecionar para `/clientes` após login

- **Tela de Listagem de Clientes**

  - Usar componente `p-table` do PrimeNG com paginação e busca por nome
  - Botões para editar e excluir itens
  - Utilizar toasts para exibir mensagens de sucesso/erro

- **Tela de Cadastro/Edição de Cliente**
  - Formulário reativo com as seguintes validações:
    - Nome: obrigatório, mínimo 3 caracteres
    - E-mail: formato válido
    - Telefone: com máscara no frontend e gravação apenas de números na API
    - Status: dropdown (Ativo/Inativo)
  - Permitir cadastrar mais de um endereço para o cliente, onde todos os campos do endereço são strings
  - Reutilização do formulário para edição
  - Utilizar `p-dialog` ou `p-card` para exibição do formulário

### IMPORTANTE - Criar uma branch separada com o seu nome para realizar o desafio