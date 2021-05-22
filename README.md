# React and Nest App Dockerized


Web application developed to show news about node js, for this an api is consumed through the backend developed with Nest JS. On the other hand, we have the front-end application, in charge of consuming the API developed with React JS.

# Explanation of operation


When executing the back-end for the first time, it performs a primary insertion of the data with the url of the news-node service, then every 1 hour, it performs a procedure to check if there is new news in the service mentioned above, in order to do so. insert new records into our mongodb database. The front-end is responsible for consuming the methods provided by the back to list the news and eliminate them from the database. In this way, the news is sent to appear again.


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

Both in the back and in the front

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


* [React JS](https://es.reactjs.org/) - Library front-end 
* [Nest JS](https://nestjs.com/) - Framework back-end Node JS

## Author ✒️

* **Juan Gajardo** - [jcgajardon](https://github.com/jcgajardon)


