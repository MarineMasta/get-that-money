//varibles
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const transactionSchema = new Schema(
  {
    //transaction name and/or type
    name: {
      type: String,
      trim: true,
      required: "Enter a name or type for transaction"
    },
    //transaction amount
    value: {
      type: Number,
      required: "Enter transaction amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
