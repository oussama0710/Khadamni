const {service} = require("../models/service.model");

//Create ONE
module.exports = {
  addNewService: (request, response) => {
    service.create(request.body)
      .then(newlyCreatedService => response.json(newlyCreatedService))
      .catch(err=>response.status(400).json(err.errors))
  },
  showServices: (req, res)=>{
    service.find({category: req.params.category})
    .then(result => res.json({result}))
      .catch(err => res.status(400).json(err.errors))
  },
  
  };
