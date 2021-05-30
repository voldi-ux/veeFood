const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required: true,
    },
    password: {
        type:String,
        required:true
    },
    totalOders: {
        type:Number,
        default:0 
    },
    totalSpent: {
        type:Number,
        default:0 
    },
    orderIds: [Number]
})


module.exports = mongoose.model('user',userSchema)