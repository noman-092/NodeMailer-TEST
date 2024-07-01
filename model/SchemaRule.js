const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
    email:String,
},{timestamps:true},
);
userSchema.plugin(plm);

const userCollection= mongoose.model('user',userSchema);
module.exports=userCollection;
;
