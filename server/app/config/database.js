const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.MONGO_URL;
const INIT = async () => {
    await mongoose.connect(url)
    .then(console.log('Server : Mongoose Connected'))
    .catch((err) => console.log(err));
};
module.exports = INIT;