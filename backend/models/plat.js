const mongoose=require('mongoose');
const platSchema = mongoose.Schema({
    name:String,
    description:String,
    price:String,
	idChef:String,      
    img:String
});
const plat= mongoose.model('Plat', platSchema);
module.exports=plat;