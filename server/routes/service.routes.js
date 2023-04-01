const serviceController = require ("../controllers/service.controller")

module.exports = (app) =>{
    app.post("/api/users/register", serviceController.registerUser)
}