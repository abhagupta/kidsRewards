let mongoose = require('mongoose')
let bcrypt = require('bcrypt')
let nodeify = require('bluebird-nodeify')

let TransactionSchema = mongoose.Schema({
	type: {
		type:String,
		required: true
	},
    value: {
        type:Number,
        required: true
    },
    username: {
        type:String,
        required: true
    },
    date: {
        type:Date,
        required: true
    }


})





module.exports = mongoose.model('Transaction', TransactionSchema)