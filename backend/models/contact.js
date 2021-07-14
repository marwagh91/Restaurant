const mongoose =require('mongoose');
const contactSchema= mongoose.Schema({
    message:String,
    name:String,
    email:String,
    subject:String
});
const contact= mongoose.model('Contact', contactSchema);
module.exports=contact;