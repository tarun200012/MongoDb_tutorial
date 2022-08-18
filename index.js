const Mongoose = require('mongoose');
const User= require('./user.js');
const Blog= require('./blog.js');
const userQuery= require('./userModelimpl');
const blogQuery= require('./blogModelimpl');
const connect = () => {
   return Mongoose.connect('mongodb://localhost:27017/UnacademyMongoDemo');
}


connect()
.then(async connection=>{
console.log('Mongo DB connection setup done!!');

// JUST FOR DEMO
    await User.deleteMany({})
    await Blog.deleteMany({})
   
//


 const user= await User.create({
    firstName: 'Tarun',
    lastName: 'Gupta',
    email: 'tg4@gmail.com'
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

 const b1 = await Blog.create({
    title: 'New Blog4',
    description: 'This is my latest blog please check it out !!!',
    author: user.id
    // author: user
 });    
 console.log(b1);

//  const b2= await Blog.findById(b1.id).populate('author').select('author').exec();
//  console.log(b2);
 const b2= await blogQuery.blogByAuthor(user.id);
 console.log(b2);








})
.catch(err=>console.log(err));