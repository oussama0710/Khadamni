const userController = require ("../controllers/user.controller")

module.exports = (app) =>{
    app.post("/api/users/register", userController.registerUser)
    app.post("/api/users/login" , userController.loginUser)
    app.get("/api/users/logout" , userController.logoutUser)
    app.get("/api/auth/allUsers/user/:id", userController.getAllUsersForUser);
    app.get("/api/auth/allUsers/serviceProvider/:id", userController.getAllUsersForServiceProvider);
    app.get("/api/auth/OneUser/:id", userController.getOneUser);
    app.put("/api/user/update/:id", userController.updateUser);

    app.put("/api/user/update/:id", userController.updateUser);
    app.get("/api/auth/users", userController.getUsers);
    app.get("/api/auth/User/:id", userController.findOneUser);
    app.get("/api/services/category/:category", userController.listByCategory);

}