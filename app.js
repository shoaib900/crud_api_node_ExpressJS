require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const route = require("./router/router")

app.use(express.json());
app.use(cors());
const port =process.env.PORT || 8000;

mongoose.connect(process.env.DB)
.then( ()=> {console.log("DB connection established")})

// app.get('/', route)
app.use('/', route)

app.listen(port, () => { console.log(`server is running...port is ${port}`); });