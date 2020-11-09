<h1 align="center">
    <img src="https://i.imgur.com/ceICOgl.png" width="400"/>
</h1>

<h4 align="center"> 
	🚧 FishBoard 0.1 🚀 em construção... 🚧
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/thlindustries/piscicultura?color=%2304D361">


  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/tgmarinho/nlw1/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/thlindustries/piscicultura?style=social">
  </a>
</p>


## 💻 Sobre o projeto

🐟 Fishboard - é um projeto que tem por objetivo incentivar pequenos e médios produtores agrícolas a iniciarem criações de peixes, facilitando a visualização de variáveis sobre o tanque de criação e consequentemente oferecendo um feedback para que medidas preventivas ou ajustivas sejam tomadas para garantir uma maior eficiência no crescimento da geração . 

O produtor pode se cadastrar na plataforma com as seguintes informações:
- Nome do produtor
- E-mail
- Senha


Os usuários terão acesso ao aplicativo móvel, onde poderão:
- Vizualizar gŕaficos em tempo real que mostram os seguintes dados coletados através de sensores no tanque:
  - pH
  - Luminosidade do ambiente
  - Temperatura externa
  - Pressão
  - Temperatura interna

Pesquisa desenvolvida em parceria com o **IFSP** <img src="https://i.imgur.com/OYXguD2.png" width="20"/>.


## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/uawH9rp92GDwFH40CJgjho/FishBoard-new-colors?node-id=0%3A1">
  <img alt="Made by Thlindustries" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>


## Mobile 
- **Observação:** no layout os gráficos são svg's pois o desenvolvimento de integração do react-native com libs gráficas ainda está em andamento ! O layout será atualizado no futuro

<p align="center">
  
  <img alt="Fishboard" title="#Fishboard" src="https://i.imgur.com/hu0ncWb.png" width="200px">

  <img alt="Fishboard" title="#Fishboard" src="https://i.imgur.com/nrH4ob1.png" width="200px">

  <img alt="Fishboard" title="#Fishboard" src="https://i.imgur.com/c4UZr1T.gif" width="240px">  
  
</p>

## Funcionamento do protótipo
- **ATENÇÃO:** Aqui você pode ver alguns gifs que foram feitos em teste de campo, os quais demonstrar o funcionamento do protótipo eletrônico

<p align="center">
	<strong>GIF 1</strong>
	<p>https://i.imgur.com/s4shR9k.gifv</p>
	<strong>GIF 2</strong>
	<p>https://i.imgur.com/t2hCgWR.gifv</p>
	<strong>GIF 3</strong>
	<p>https://i.imgur.com/8WazBxx.gifv</p
</p>


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [React][reactjs]
- [React Native][rn]
- [TypeScript][typescript]
- [Socket.io][socketio]


## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo divido em duas partes:
1. Back End (pasta backend) 
2. Mobile (pasta mobile)

💡Para o correto funcionamento do app mobile é necessário que o servidor backend esteja rodando.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs]. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/thlindustries/piscicultura

# Acesse a pasta do projeto no terminal/cmd
$ cd piscicultura

# Vá para a pasta server
$ cd backend

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
```

### 📱Rodando a aplicação mobile 

🚧 Em construção... 🚧

```bash
# Um link para a instalação do APP e a configuração de variáveis será adiciona aqui assim que o projeto tiver sua primeira release

```

## 😯 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)


## 👥 Contribuidores
- Thiago Lorente Kraetzer -> 
  <img alt="Made by Thlindustries" src="https://img.shields.io/github/followers/thlindustries?style=social">
- Glauber da Rocha Balthazar ->
  <img alt="Made by Thlindustries" src="https://img.shields.io/github/followers/brunoJSX?style=social">
- Bruno Henrique ->
  <img alt="Made by Thlindustries" src="https://img.shields.io/github/followers/glauberbalthazar83?style=social">

## 💡 Ideas
<img src="https://i.imgur.com/RpAx01c.jpg" width="40"/> :[Acesse nosso Notion](https://www.notion.so/thlindustries/Piscicultura-a3a59193811040d5ab2282011cc8561a) 

## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Thiago Lorente Kraetzer 👋🏽 [Entre em contato!](https://www.linkedin.com/in/thiago-kraetzer/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[rs]: https://rocketseat.com.br
[socketio]: https://socket.io/
