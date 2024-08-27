const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tenderSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["all", "specific"],
  },
});

const Tender = mongoose.model("Tender", tenderSchema);
module.exports = Tender;
