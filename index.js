require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var postMessageRoutes = require('./controller/postMessageController')


var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.listen(4000,()=>console.log('Server started at : 4000'))


app.use('/postMessages',postMessageRoutes)

// const mongoose = require('mongoose')
// const express = require('express');
// const bodyParser = require('body-parser');

// const postMessageRoutes = require('./controller/postMessageController');

// const MONGODB_URI = 'mongodb+srv://max-curd-nodejs:l65yA34FSSztShn3@cluster0-1ya5e.mongodb.net/postManagerDB?retryWrites=true&w=majority'

// var app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/postMessages', postMessageRoutes)

// mongoose.connect(MONGODB_URI, { 
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }, (err) =>{
//       if (!err)
//     console.log("CONNECTED TO MONGODB COMPASS")
//     else
//     console.log('Error while connecting MONGODB', JSON.stringify(err, undefined,2))
//   })
//   .then(result => {
//     app.listen(3000);
//   console.log("RUNNING ON PORT:3000")
//   })
//   .catch(err => {
//     console.log(err);
//   });

