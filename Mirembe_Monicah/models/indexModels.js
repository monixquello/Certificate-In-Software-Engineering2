const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true
    },
    date_of_birth:{
        type:String
    },
    gender:{
        type:String
    },
    country:{
        type:String,
    },
    state:{
        type:String
    },
    contacts:{
        type:String
    },
    zip_code:{
        type:String
    },
    phone_Number1:{
        type:String
    },
    phone_Number2:{
        type:String
    },
    email:{
        type:String
    },

})

module.exports = mongoose.model("Register", registerSchema);