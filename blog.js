const Mongoose = require('mongoose');

const blogSchema= Mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true,
        minlength: 10
    },
    author:{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }

},{timestamps:true});

//trigger
blogSchema.post('save',(doc)=>{
    console.log("%s blog has been saved",doc.id);
})

module.exports = Mongoose.model('blog', blogSchema);