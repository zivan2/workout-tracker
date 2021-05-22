const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workout = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
  },
  type: {
    type: String,
    required: "Enter a type"
  },
  distance: {
    type: Number
  },
  duration: {
    type: Number
  },
  weigth: {
    type: Number
  },
  sets: {
    type: Number
  }

});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
