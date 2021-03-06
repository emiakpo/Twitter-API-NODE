
const mongoose = require('mongoose');

const tweet = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tweetInfo:{type : String, required:true},
    likes:[
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'UsersRecord'
        }
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'UsersRecord' },
    tweetAttach:{type : Array, "default" : [] },
    isActive:{type:Boolean, default:true}
},{timestamps: true});

//this will get every tweet of tweet
tweet.virtual('retweets', {
    ref: 'ReTweet',
    localField: 'tweetId',
    foreignField: '_id'
});

module.exports = mongoose.model('Tweet',tweet);
