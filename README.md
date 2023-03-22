# Busca de filmes atráves de uma API

## :computer: Sobre
🧠 Objetivo: Colocar em pratica alguns conceitos (API, Requisições, Rotas..). Projeto desenvolvido por mim.
 * Listagem dos melhores resultado, página inicial.
 * Ao efetuar uma busca, trazer todos os resultados e exibir em tela.
 * Ao clicar em detalhes abrir página detalhes, onde vai conter alguns dados do filme que foi clicado.
 
 ## :rocket: Techs
 
 * React + TypeScript
 * Axios
 * Eslint
 * React-hook-form
 * Styled-components
 * Phosphor icon
 * Vite
 
 ## Como iniciar ?
 
 - Faça um clone do projeto.
    - ```https://github.com/wwilliamsantana/searchMoviesAPI.git```
 - Dentro da pasta do projeto, instale as dependências.
    - ```npm i```
 - Para este projeto funcionar, precisamos de algumas variáveis de ambiente. Iremos criar um arquivo (.env.local).
    -  ```
        VITE_SEARCH=https://api.themoviedb.org/3/search/movie
        VITE_API=https://api.themoviedb.org/3/movie/
        VITE_IMG=https://image.tmdb.org/t/p/w500
        
        VITE_API_KEY= Está key iremos conseguir após fazer um cadastro no site (https://www.themoviedb.org/signup), após isso pegaremos a Key que ele disponibiliza.```
     
 - Execute o projeto.
    - ```npm run dev```
    
    ## Layout

<div align="center">
  
  <img alt="Layout" src="https://user-images.githubusercontent.com/84254929/226936681-7bc0e4ac-f397-4bf2-b4b1-9343ff4404c6.png" width="80%">
<hr>
  <img alt="Layout" src="https://user-images.githubusercontent.com/84254929/226927471-8d7548da-443e-47a7-8a41-439a0d235475.png" width="80%">
<hr>
  <img alt="Layout" src="https://user-images.githubusercontent.com/84254929/226936282-654c2537-fc11-44ad-a8b2-1dd1a6371e77.png" width="80%">

</div>
