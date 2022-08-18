const Blog = require('./blog');

const blogByTitle= (title)=>{
    return  Blog.find({title: title}).exec();
};
const blogByAuthor= (id)=>{
    return  Blog.find({author: id}).populate('author').exec();   
};
const blogSortedByCreatedAt= ()=>{
    return  Blog.find({}).sort(createdAt).exec();
};
const blogSortedDescByCreatedAt= ()=>{
    return  Blog.find({}).sort(-createdAt).exec();   
};
const blogTitleByAuthor= (id)=>{
    return  Blog.find({author: id}).select('title').exec();   
};


module.exports = {
    blogByAuthor,
    blogByTitle,
    blogSortedByCreatedAt,
    blogSortedDescByCreatedAt,
    blogTitleByAuthor
    
}