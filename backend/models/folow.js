const mongoose=require('mongoose');

const followSchema = mongoose.Schema({
    follower: {
        type: mongoose.Schema.ObjectId,
        ref:'User'
    },
    following: {
        type: mongoose.Schema.ObjectId,
        ref:'Plat'
    },
    followedAt: {
        type: Date,
        default: Date.now()
    }
});
const follow = mongoose.model('Follows', followSchema);
module.exports = follow;
