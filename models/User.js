let mongoose = require('mongoose')
let bcrypt = require('bcrypt')
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


UserSchema.methods.generateHash = async function(password) {
	return await bcrypt.promise.hash(password, 8)
}

UserSchema.methods.validatePassword = async function (password) {
	return await bcrypt.promise.compare(password, this.password)
}


module.exports = mongoose.model('User', UserSchema)