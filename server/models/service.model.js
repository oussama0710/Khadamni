const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: [3, "Title must be 3 characters or longer"]
    },
    category: {
      type: String,
      
    },
    description: {
      type: String,
      required: true,
      minlength: [5, "Description must be 5 characters or longer"]
    },
    photos: {
      type: Array,
      
    },
  },
  { timestamps: true }
);
// create a constructor function for our model and store in variable 'User'
const service = mongoose.model("service", ServiceSchema);
module.exports = service;
