const mongoose = require("mongoose");

const FlightSchema = mongoose.Schema({
    
        airline: String,
        flightNo: String,
        departure: String,
        arrival: String,
        departureTime: Date,
        arrivalTime: Date,
        seats: Number,
        price: Number
      
});


FlightModel = mongoose.model("flights",FlightSchema);

module.exports = {
    FlightModel
}