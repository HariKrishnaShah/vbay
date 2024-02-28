const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema
({
    description:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    createdBy:{
        ref:'user'
    },
    adID:{
        ref:'ad'
    }

});

const Comment = mongoose.model('comment', commentSchema);
Comment.createIndexes();
module.exports = Comment;