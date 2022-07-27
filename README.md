<h1 align="center">Votação Melhores Video Games </h1>
<h4 align="justify">Projeto pessoal realizado como o apreendido na Imersão Java da Alura em (julho/2022), o projeto visa criar uma página web em ReactJS que realiza votação dos melhores videos games, os dados são armazenados em uma banco não relacional (MongoDB), backend em Spring Boot 3.0 (Java 17).</h4> 
<h4>Além de votar pode realizar a inserção de um novo video game. Os votos são ordenador com método de ordenação 'insertion sort' de acordo com os votos recebidos.</h4>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

<h2 align="center"><a href="https://votacao-video-game-f11xr7y1f-irineualmeidajr.vercel.app">Clique aqui para ver meu projeto!</a></h2>

## 🖥️ Tecnologías Utilizadas:

- Java 11 </br>
- JavaScript </br>
- ReactJS </br>
- Tailwind CSS </br>
- MongoDB </br>

## :hammer: Funcionalidades do projeto

- `Consumir API`: api gerada pelo backend Spring Boot
- `Inserir VideoGame`: inserir video game a ser votado
- `Votação`: grava o voto realizado e atualiza no banco de dados
- `Ordenação`: para exibir o ranking faz ordenação utilizando insertion sort


## 🎯 Desafio
- [x] CRUD para videogames
- [x] Listagem ordenada pelo ranking
- [ ] Ordenar no backend e retornar para frontend já ordenado
- [x] Backend eviar JSON da API para o frontend consumir os dados
- [x] Responsividade do frontend

## 📺 Imagem
<b>- Branches Main</b>
<div>
  <img src="https://raw.githubusercontent.com/IrineuAlmeidaJr/votacao-video-game/main/sample/gravacaoTela.gif" />
</div>
</br>
<b>- Branches api-votacao</b>
<p>A título de exemplo, na url: https://vote-video-game-api.herokuapp.com/videogame retorna a lista dos video games</p>
<div>
  <img src="https://raw.githubusercontent.com/IrineuAlmeidaJr/votacao-video-game/main/sample/exemploBackEnd.png" width="610" />
</div>

 
## Instalação

    - Clonar repositorio
    $ git clone https://github.com/IrineuAlmeidaJr/votacao-video-game && cd votacao-video-game

    - Instalar dependencias
    $ yarn install OU npm install

    - Rodar aplicativo
    $ yarn run dev OU npm run dev

