const service = require("../models/services.model");

//Create ONE
module.exports.addNewService = (request, response) => {
  service.create(request.body)
    .then((newlyCreatedService) => {
      response.json(newlyCreatedService);
    })
    .catch((err) => {
      response.json({ message: "Something went wrong", error: err });
    });
};
