const mongoose = require('mongoose');
const {Schema} = mongoose;

const todoschema = new Schema({
    text : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('todo', todoschema);