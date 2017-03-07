var mongoose = require('mongoose');

var CoommentSchema = new mongoose.Schema({
    username: {type:String, default:''},
    body: {type:String, default:''},
    timestamp: {type:Date,  default:Date.now}
})


module.exports = mongoose.model('CoommentSchema', CoommentSchema)