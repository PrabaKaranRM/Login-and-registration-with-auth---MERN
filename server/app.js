const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/user-routes");
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(cors({ credentials: true, data: true, origin: "http://localhost:3000"}));
app.use(cookieParser());
app.use(express.json());
  
app.use('/api', router);

mongoose.connect("mongodb+srv://prabarm:prabarmvc@cluster0.doqqi.mongodb.net/?retryWrites=true&w=majority").then((
    app.listen(5000),



    console.log("Database is connected Listerning on localhost 5000")
))
.catch((err) => {console.log(err)})