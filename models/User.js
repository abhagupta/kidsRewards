let mongoose = require('mongoose')
let nodeify = require('bluebird-nodeify')

let UserSchema = mongoose.Schema({
	username: {
		type:String,
		required: true
	},
    totalRewards: {
        type:Number,
        required: true
    }

})

module.exports = mongoose.model('User', UserSchema)