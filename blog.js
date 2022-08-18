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
        minlength: 100
    },
    author:{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }

},{timestamps:true});

mudule.exports = Mongoose.model('blog', blogSchema);