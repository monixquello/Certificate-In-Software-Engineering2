const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');


const app = express();

const connectdb = require('./config/dbConfig');
connectdb();

app.use(express.urlencoded({ extended:false }));
app.use(express.json());


// importing routes
const indexRoutes = require('./controllers/indexRoutes');


// calling routes
app.use('/api', indexRoutes)

// settingup engine
app.engine("pug",require("pug").__express);
app.set("view engine", "pug");
app.set("views", path.join(__dirname,"views/pug"));

// setting up static files
app.use(express.static(path.join(__dirname,"public")));



const port = 8000;
app.listen(port, ()=>{
    console.log(`server listening on port ${port}`);
});

