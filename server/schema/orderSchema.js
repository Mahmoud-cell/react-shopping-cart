const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  {
    timestamps: true, //بترجع اتنين كي عشان لما نعمل الطلب دة اتعمل امتى وكدة
  }
);

module.exports = orderSchema;