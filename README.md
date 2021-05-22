# React and Nest App Dockerized


Web application developed to show news about node js, for this an api is consumed through the backend developed with Nest JS. On the other hand, we have the front-end application, in charge of consuming the API developed with React JS

## Starting 🚀


First we have to download the project from its git repository:
```
git clone https://github.com/jcgajardon/react-nestjs-app
```


### Pre-requirements 📋

[Node JS LTS version](https://nodejs.org/es/download/) 
[NPM](https://www.npmjs.com/)
[Git](https://git-scm.com/)
[Docker](https://www.docker.com/)

### Installation 🔧

First, go to the server-app folder and create an .env file with the following environment variables:

.env
```
API_NEWSNODE_URL=https://hn.algolia.com
DB_MONGO_URL=mongodb://mongodb:27017/nestjs
```
it is important to configure the mongo database locally or you can get a URI in [MongoAtlas](https://www.mongodb.com/cloud/atlas)

Then we install the application with the following command:

```
npm run install
```

To execute:
```
npm run start:dev
```


Second, go to the client-app folder and create the .env file:

.env
```
REACT_APP_BACKEND_URL=http://localhost:4000
```

Then we install the application with the following command:

```
npm run install
```

To execute:
```
npm run start
```


## Running the tests ⚙️

Tanto en el back como en front, ejecutar el comando:

```
npm run test
```


## Dockerized app 📦

To run our app with docker, we must go to the root of the project and build our docker-compose.yml:

```
docker-compose build
```


Then, we execute with the command:

```
docker-compose up
```

We can see our different docker in the console and working by port: 80 (React), 4000 (Nest) and 27017 (Mongodb)

## Built with 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [React JS](https://es.reactjs.org/) - Library front-end 
* [Nest JS](https://nestjs.com/) - Framework back-end Node JS

## Author ✒️

* **Juan Gajardo** - [jcgajardon](https://github.com/jcgajardon)


