const axios = require('axios')
const Character = require("../models/Character");
const express = require("express");
const app = express();
require("dotenv").config();
const {PORT} = process.env;
const cors = require('cors')
const { dbConnection } = require("../config/config")

app.use(express.json())
app.use(cors())

dbConnection()



for (let i = 0; i < 26; i++) {
    axios.get('https://rickandmortyapi.com/api/character/?page=' + i)
        .then(res => {
            const personajes = res.data.results;
            for (const personaje of personajes) {
                Character.create({name:personaje.name,status:personaje.status,species:personaje.species,gender:personaje.gender,image:personaje.image})
            }
        })

}

app.listen(PORT, console.log(`Server started on port ${PORT}`));
