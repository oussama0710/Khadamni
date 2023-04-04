const service = require("../models/service.model");

//Create ONE
module.exports = {
  addNewService: (request, response) => {
    service.create(request.body)
      .then(newlyCreatedService => response.json({newlyCreatedService}))
      .catch(err=>response.status(400).json(err.errors))
  },
};
