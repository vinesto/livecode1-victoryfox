const mongoose = require('mongoose')
const Schema = mongoose.Schema

var quoteSchema = new Schema({
    status: {
        type: String,
        required: true
    },
    user:{
        ref:"User",
        type: Schema.Types.ObjectId
    },
    likes:Array
})

var Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote



