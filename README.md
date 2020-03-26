# mevn-stack-exchange

A MEVN Full-stack app using MongoDB, Express.js, Vue and Node.js.

**Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* The project is a MEVN full stack: a client-side for the frontend Vue framework and a server-side for the backend calls
* [Vue Router](https://router.vuejs.org/guide/essentials/navigation.html) used to navigate pages in browser
* [Node.js MongoDB Driver API](http://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html#findOne) documentation used to create code for collection `find`, `findOne`, `insertOne`, etc.
* [Vuex](https://vuex.vuejs.org/api/#vuex-store) store used to 

### MongoDB shell commands

* `mongo` - enter MongoDB console
* `show dbs` - list databases
* `use yt-ideas` - switch to database called 'yt-ideas'
* `show collections` - show all collections in database
* `db.ideas.find()` - (when switched to database 'yt-ideas' show contents of database

## Screenshots

![Vue frontend image](./img/vueFrontend.png)
![backend image](./img/nodeBackend.png)

## Technologies - Backend

* [MongoDB Atlas](https://www.mongodb.com/) using AWS Cloud storage.
* [MongoDB v3.5.5](https://www.npmjs.com/package/mongodb) driver for Node.js
* [Express v4.17.1](https://www.npmjs.com/package/express)
* [Node.js v12.3.1](https://nodejs.org/en/)

## Technologies - Frontend

* [Vue v2.6.11](https://vuejs.org/)
* [Vuex v3.1.2](https://vuex.vuejs.org/) state management
* [Vue.js devtools chrome extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
* [Vuetify Material Design](https://vuetifyjs.com/en/)
* [Axios v0.19.2](https://www.npmjs.com/package/axios)

## Setup - Backend

* In the `server` directory install dependencies using "npm install", then run using "nodemon index.js"

## Setup - Frontend

* In the `client` directory install dependencies using "npm install", then run using "npm start serve".

## Code Examples - Backend

* todo

```javascript


```

## Code Examples - Frontend

* todo

```javascript


```

## Features

* [Vuex](https://vuex.vuejs.org/) state management used as a central store for all components. Mutations used to commit and track changes
* [Axios](https://github.com/axios/axios) used to perform post request

## Status & To-Do List

* Status: Working basic Vue frontend. Backend MongoDB database stores text send from frontend.
* To-Do: complete front and backend.

## Inspiration

* [Web Dev Junkie, Youtube: Live Coding a Full Stack Idea App with Vue, Express, and Mongo](https://www.youtube.com/watch?v=myJRnwzw5ss)
* [Vue CLI 3 - Creating our Project](https://www.vuemastery.com/courses/real-world-vue-js/vue-cli/)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
