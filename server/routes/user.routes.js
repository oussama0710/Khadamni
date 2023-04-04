const userController = require ("../controllers/user.controller")

module.exports = (app) =>{
    app.post("/api/users/register", userController.registerUser)
    app.post("/api/users/login" , userController.loginUser)
    app.get("/api/users/logout" , userController.logoutUser)
    app.get("/api/auth/allUsers/:id", userController.getAllUsers);
    app.get("/api/auth/OneUser/:id", userController.getOneUser);

    app.put("api/user/update/:id", userController.updateUser);
}