# Install PACKAGE.JS:
npm init -y

npm install uuid

> atualizar npm 
npm run

# Install PARCEL:

xxx npm install parcel-bundler --save-dev xxx

npm install parcel --save-dev

npm i @parcel/transformer-image%

# Install GSAP:
npm install gsap

#  Install dependencies:
npm install
```
Compile the code for development and start a local server:
```
npm start
```
Create the build:
```
npm run build


#  GITHUB
1- acessar a pasta no terminal 
2- git init
3- gh repo create
4- git add . 
5- git commit -m "mensagem de commit"
6- git push --set-upstream origin master(nome da branch)
git push --set-upstream origin master



# HEROKU START

# INSTALL EXPRESS 
install express
npm install express

# PACKAGE.JSON > SCRIPTS
"scripts": {
"srtart": "node server",
"dev": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
},

# TERMINAL INSTALL EXPRESS 
install express
npm install express


# SERVER.JS ( pasta externa do src)

const express = require('express')
const { resolve} = require('path')

const app = express()

app.use('/',
  express.static(
    resolve(
      __dirname,
      './build'
    )
  )
)

app 
  .listen(process.env.PORT || 3000, (err) => {
    if (err) {return console.log(err)}

    console.log('Tudo fica funcionando certinho')
  })


# TERMINAL BUILD
npm build


# danielbonifacio 
# alga-todo-list-react