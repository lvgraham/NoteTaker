const express = require('express');

//require routers
const apiRouter = require('./routes/apiroute');
const htmlRoute = require('./routes/htmlroute');

const app = express();
app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

//these two lines make it so express can communicate in JSON
//uses decoding mech to work with type of data 
app.use(express.urlencoded({extended: true}))
app.use(express.json())


//route to get to the main HTML page
app.use('/', htmlRoute);

//route to get to the notes page
app.use('/api/notes', apiRouter)


app.listen(PORT, ()=> {
    console.log("App listening on PORT " + PORT);
  });


