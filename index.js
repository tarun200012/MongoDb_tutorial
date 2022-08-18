const Mongoose = require('mongoose');
const User= require('./user.js');
const userQuery= require('./userModelimpl');
const connect = () => {
   return Mongoose.connect('mongodb://localhost:27017/UnacademyMongoDemo');
}


connect()
.then(async connection=>{
console.log('Mongo DB connection setup done!!');

// JUST FOR DEMO
    await User.deleteMany({})
   
//


 const user= await User.create({
    firstName: 'Tarun',
    lastName: 'Gupta',
    email: 'tg@gmail.com'
 });
 console.log(user);
 console.log('********');
 const u1=await userQuery.getAllUsers();
 const u2=await userQuery.getUserById(user.id);
 const u3=await userQuery.updateUserById(user.id,{underAge: true});
 console.log(u1);
 console.log(u2);
 console.log(u3);


 console.log('**********************************');

 


})
.catch(err=>console.log(err));