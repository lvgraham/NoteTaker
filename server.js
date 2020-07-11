const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

//routes will go here

//these two lines make it so express can communicate in JSON
//uses decoding mech to work with type of data 
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.listen(PORT, ()=> {
    console.log("App listening on PORT " + PORT);
  });