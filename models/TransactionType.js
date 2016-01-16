let mongoose = require('mongoose')
let bcrypt = require('bcrypt')
let nodeify = require('bluebird-nodeify')

let TransactionTypeSchema = mongoose.Schema({
	name: {
		type:String,
		required: true
	},
    value: {
        type:Number,
        required: true
    }


})

module.exports = mongoose.model('TransactionType', TransactionTypeSchema)