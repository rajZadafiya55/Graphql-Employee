const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    field1:{type:String},
    field2:{type:Number},
    field3:{type:String}
})

const epmModel = mongoose.model('employees', empSchema);

module.exports = epmModel;