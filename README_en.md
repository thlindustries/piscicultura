<h1 align="center">
    <img src="https://i.imgur.com/i698Gr5.png" width="400"/>
</h1>

<h4 align="center"> 
	🚧 FishBoard 0.1 🚀 in progress... 🚧
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/thlindustries/piscicultura?color=%2304D361">


  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/tgmarinho/nlw1/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/thlindustries/piscicultura?style=social">
  </a>
</p>


## 💻 About the project

🐟 Fishboard - it's a project that aims to encourage small and medium agricultural producers to start a fish farming, making easier the data visualization of variables on the breeding tank and consequently offering a visual feedback so that preventive or adjusting measures can be taken to ensure greater efficiency in the generation growth . 

The producer can register him self giving the following information:
- Producer's name
- E-mail
- Password


The users will have access to the mobile app where they'll be able to:
- See real-time charts that shows the following data that were collected with sensors in the breeding tank:
  - pH
  - Ambient luminosity
  - Ambient temperature
  - Pressure
  - Water temperature

This research was done in partnership with **IFSP** <img src="https://i.imgur.com/OYXguD2.png" width="20"/>.


## 🎨 Layout

The app layout is available on Figma:

<a href="https://www.figma.com/file/uawH9rp92GDwFH40CJgjho/FishBoard-new-colors?node-id=0%3A1">
  <img alt="Made by Thlindustries" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>


## Mobile 
- **Observation:** in the layout, the garphics are svg's because the integration of react-native and charts library was not developed yet ! They'll be available soon.

<p align="center">
  
  <img alt="Fishboard" title="#Fishboard" src="https://i.imgur.com/hu0ncWb.png" width="200px">

  <img alt="Fishboard" title="#Fishboard" src="https://i.imgur.com/nrH4ob1.png" width="200px">

  <img alt="Fishboard" title="#Fishboard" src="https://i.imgur.com/qx0MfjO.png" width="200px">  
</p>



## 🛠 Techs

The following tools ware used to build this project:

- [Node.js][nodejs]
- [React][reactjs]
- [React Native][rn]
- [TypeScript][typescript]
- [Socket.io][socketio]


## 🚀 How to run the project

We can divide this project in two parts:
1. Back End (backend folder) 
2. Mobile (mobile folder)

💡For the app to work properly it's needed that the backend server is running.

### Prerequisites

Before start you need to install the following tools in yout computer:
[Git](https://git-scm.com), [Node.js][nodejs]. 
I suggest you to use vscode [VSCode][vscode]

### 🎲 Running the Back End (server)

```bash
# Clone the repo
$ git clone https://github.com/thlindustries/piscicultura

# Enter into the folder
$ cd piscicultura

# Go to the backend folder
$ cd backend

# Install the dependencies
$ yarn

# Run the app in dev mode
$ yarn dev:server

# The server'll start on port 3333 - go to http://localhost:3333 
```

### 📱Running the app into mobile

🚧 In progress... 🚧

```bash
# A direct link to install the APP will be provided when the project have your first release

```

## 😯 How to help this project?

1. **Fork** the repo.
2. Create a new branch with your features: `git checkout -b my-feature`
3. Save it and commit with a descriptive message: `git commit -m "feature: My new feature"`
4. Send us your branch: `git push origin my-feature`
> If you have some doubt on how to fork a project, follow this tutorial: [how to contribute with projects on github](https://github.com/firstcontributions/first-contributions)


## 👥 Contributors
- Thiago Lorente Kraetzer -> 
  <img alt="Made by Thlindustries" src="https://img.shields.io/github/followers/thlindustries?style=social">
- Glauber da Rocha Balthazar ->
  <img alt="Made by Thlindustries" src="https://img.shields.io/github/followers/brunoJSX?style=social">
- Bruno Henrique ->
  <img alt="Made by Thlindustries" src="https://img.shields.io/github/followers/glauberbalthazar83?style=social">

## 💡 Ideas
<img src="https://i.imgur.com/RpAx01c.jpg" width="40"/> :[Acesse nosso Notion](https://www.notion.so/thlindustries/Piscicultura-a3a59193811040d5ab2282011cc8561a) 

## 📝 Licence

This project is under MIT's licence.

Made with ❤️ by Thiago Lorente Kraetzer and Contributors 👋🏽 [Contact me!](https://www.linkedin.com/in/thiago-kraetzer/)

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