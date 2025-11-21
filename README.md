# Lined Studio

Este é o Sanity Studio para o projeto "Lined". Ele serve como a interface de gerenciamento de conteúdo (CMS) para o seu site ou aplicativo.

## Estado Atual

O projeto está configurado para utilizar variáveis de ambiente para `projectId` e `dataset`, garantindo maior flexibilidade e segurança na configuração.

## Configuração e Execução

Para configurar e executar o projeto localmente, siga os passos abaixo:

1.  **Instalar Dependências:**
    Certifique-se de ter o Node.js e o npm (ou yarn) instalados. Em seguida, instale todas as dependências do projeto:

    ```bash
    npm install
    # ou
    yarn install
    ```

2.  **Configurar Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

    ```
    # Para o frontend Vite (sanity.config.ts)
    SANITY_STUDIO_PROJECT_ID="your_project_id"
    SANITY_STUDIO_DATASET="your_dataset"

    # Para o backend (sanity.cli.ts)
    SANITY_PROJECT_ID="your_project_id"
    SANITY_DATASET="your_dataset"
    ```

    -   Substitua `"your_project_id"` pelo ID do seu projeto Sanity.
    -   Substitua `"your_dataset"` pelo nome do seu dataset Sanity (geralmente `production` ou `development`).

    Estas variáveis são essenciais para que o Sanity Studio se conecte corretamente ao seu backend Sanity.

3.  **Iniciar o Servidor de Desenvolvimento:**
    Após instalar as dependências e configurar o arquivo `.env`, você pode iniciar o Sanidor de desenvolvimento:

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

    O Studio estará acessível em `http://localhost:3333` (ou outra porta, se configurada).

## Gerenciamento de Variáveis `.env`

O Sanity Studio, por ser uma aplicação web baseada em Vite, expõe variáveis de ambiente ao navegador. Para que essas variáveis sejam acessíveis no frontend do Studio, elas **devem ser prefixadas com `SANITY_STUDIO_`**.

-   Variáveis como `SANITY_STUDIO_PROJECT_ID` são carregadas automaticamente pelo Vite e disponibilizadas através de `import.meta.env` no código do Studio (por exemplo, `import.meta.env.SANITY_STUDIO_PROJECT_ID`).
-   Para scripts Node.js (como o `sanity.cli.ts`), as variáveis do `.env` são acessadas diretamente (por exemplo,   `projectId, dataset,`).

**Importante:** Nunca inclua informações sensíveis (como chaves de API secretas) diretamente no frontend do Studio ou em seu `.env` se o Studio for público. Utilize funções serverless ou APIs de backend para lidar com dados sensíveis.