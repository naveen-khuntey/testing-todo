const express = require("express");
const cors = require('cors');
const init_db = require('./app/config/database');
const todo = require('./app/routes/todoroute');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());
init_db();
app.use('/',todo);

const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`server on ${port}`);
})