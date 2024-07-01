const mongoose = require('mongoose');

exports.connect= async () =>{
    try{
        const conn = await mongoose.connect("mongodb+srv://numanansari078:Noman092@cluster0.zlxrcvr.mongodb.net/test");
        console.log("connected")
    }catch(err){
         console.log(err.message);
    }
}