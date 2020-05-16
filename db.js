const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb+srv://max-curd-nodejs:l65yA34FSSztShn3@cluster0-1ya5e.mongodb.net/postManagerDB?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true, useFindAndModify: false 
  }, (err) =>{
      if (!err)
    console.log("CONNECTED TO MONGODB COMPASS")
    else
    console.log('Error while connecting MONGODB', JSON.stringify(err, undefined,2))
  })