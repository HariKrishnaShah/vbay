const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const savedAdSchema = new Schema
({
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

const SavedAd = mongoose.model('savedAd', savedAdSchema);
SavedAd.createIndexes();
module.exports = SavedAd;