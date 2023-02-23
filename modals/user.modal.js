const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userModel = mongoose.model("User",userSchema);

module.exports = {
    userModel
}

// {
//     _id: ObjectId,
//     name: String,
//     email: String,
//     password: String
//   }
