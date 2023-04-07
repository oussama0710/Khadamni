const serviceController = require("../controllers/service.controller")

module.exports = (app) =>{
    app.post("/api/add/service", serviceController.addNewService);
    app.get("/api/service/:category", serviceController.showServices)
}