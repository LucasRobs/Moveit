# Criendo o projeto react

1º inicie o projeto
```sh
yarn create react-app {nomeDoProjeto} --template=typescript
```
---
2ºNas pastas deixe apenas esses arquivos
  - public 
    - index
  - src
    - app, index.tsx e react-app-env
---
3º limpe os códigos
  - public/index
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```
  - src/app
```tsx
function App() {
  return (
    <h1>hello</h1>
  );
}

export default App;
```
  - src/index
```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
```
---
# Primeiros passos
## Adicionando fontes
1º Entre no link https://fonts.google.com/ 

2º escolha a fonte 

3º click em "select this style"

4º copie o link gerado e cole no arquivo "public/index.html" a cima da "tittle"

---
## Criando o global.css e iniciando
1º crie um arquivo src/styles/global.css

2º cole esse código e mude os valores das fontes e cores
```css
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body{
  background: #f2f3f5;
  color: #666
}
body,input,textarea, button{
  font: 400 16px "Inter", sans-serif;
}

button{
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
```
---
## Criando padrão de cores
1º pegue como exemplo o trexo de código a baixo
```css
:root{
  --white:#fff;
  --background:#F2f3f5;
  --gray-line:#DCDDE0;
  --text:#666666;
  --text-heighlight:#B3B9FF;
  --title:#2E384D;
  --red:#e83f5b;
  --green:#4cd62b;
  --blue:#5965e0;
  --blue-dark:#4953b8;
  --blue-twitter:#2aa9e0;
}
```
---
# Criando projeto Next.js
## Iniciando
- Inicie o projeto com :
 ```sh
 yarn create next-app "nome"
 ```
 - delete os seguintes arquivos
   - pasta ./styles
   - o conteudo da pasta ./public
   - pasta ./pages/api
   - delete todo html e inportações dentro de ./pages/index.js
   - troque o tipo dos arquivos ./public/index.js & _app.js para .tsx
   - crie uma pasta chamada ./src e coloque a pasta ./pages dento
   - dentro da pasta ./src crie as pastas componentes e styles

---
## Intalando as dependencias de desenvolvimento
- rode o comando
```sh
yarn add typescript @types/react @types/react-dom @types/node -D
```
---
## Como adinionar fontos no next.js
- crie um arquivo com o nome -document.tsx em ./src/pages
- cole o código e coloque o links das fontes
```tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    //LINK..
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
                
            </Html>
        )
    }
}
```
## Notas
- tudo que estiver dentro de _document.tsx é carregado apenas uma vez
- tudo que estiver em _app.tsx e carregado apenas uma vez porem todos os valores são recalculados
  
---
  ## Crie CSS module
  - Cria a pasta ./styles
  - Crie arquivos do tipo .module.css
  - importe no seu arquivo
  ```tsx
import styles from '../styles/NomeDoArquivo.module.css'
  ```
  - Use className={styles.NomeDoStilo} quando for referenciar um estilo
