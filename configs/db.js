const mongoose = require(`mongoose`);
require("dotenv").config();
// mongodb://localhost:27017
mongoose.set('strictQuery', false);
const connection  = mongoose.connect(process.env.mongoURL_airticket)

module.exports = {
    connection
};