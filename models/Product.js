const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  family: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  releasedate:{
    type:String
  },
  eol: {
    type: String
  },
  eos: {
    type: String
  },
  Upsell: [
    {
      name: {
        type: String,
        required: false
      },
      Upsell: {
        type: Boolean,
        default: false
      }
    }
  ],
  CrossSell: [
    {
      name: {
        type: String,
        required: false
      },
      Crosssell: {
        type: Boolean,
        default: false
      }
    }
  ],
  EndofLife: [
    {
      name: {
        type: String,
        required: false
      },
      Endoflife: {
        type: Boolean,
        default: false
      }
    }
  ]
});

module.exports = Product = mongoose.model("products", ProductSchema);
