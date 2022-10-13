const express = require("express");
const app = express();
require("dotenv").config();
const {PORT} = process.env;
const cors = require('cors')
const { dbConnection } = require("./config/config")

app.use(express.json())
app.use(cors())

dbConnection()

app.use('/characters',require('./routes/characters'))

app.listen(PORT, console.log(`Server started on port ${PORT}`));
