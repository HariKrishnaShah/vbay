const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema
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
    adId:{
        ref:'ad'
    },
    commentId:{
        ref:'comment',
    }

});
const Reply = mongoose.model("reply", replySchema);
Reply.createIndexes();
module.exports = Reply;
