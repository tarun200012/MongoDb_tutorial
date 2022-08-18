var Mongoose = require('mongoose');

const connect = () => {
   return Mongoose.connect('mongodb://localhost:27017/UnacademyMongoDemo');
}


connect()
.then(connection=>{
console.log('Mongo DB connection setup done!!');
})
.catch(err=>console.log(err));