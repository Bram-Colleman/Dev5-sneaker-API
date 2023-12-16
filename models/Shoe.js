const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ShoeSchema = new Schema({
  shoeType: {
    type: String,
    required: true,
  },
  shoeSize: {
    type: String,
    required: true,
  },
  shoeColorSole: {
    type: String,
    required: true,
  },
  shoeColorLaces: {
    type: String,
    required: true,
  },
  shoeColorPanelDown: {
    type: String,
    required: true,
  },
  shoeColorPanelUp: {
    type: String,
    required: true,
  },
  shoeMaterialPanelDown: {
    type: String,
    required: true,
  },
  shoeMaterialPanelUp: {
    type: String,
    required: true,
  },
  jewel: {
    type: String,
    required: true,
  },
  initials: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userAddress: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
});

const Shoes = mongoose.model("Shoes", ShoeSchema);

module.exports = Shoes;
