const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config()
const SECRET = process.env.JWT_SECRET_KEY;

module.exports = {
  // *register
  // async much better safe then then and catch (au lieu de promises)
  registerUser: async (req, res) => {
    try {
      // create a user wish is an instance of the class User
      const user = new User(req.body);

      const newUser = await user.save();
      console.log(SECRET);
      const userToken = jwt.sign({ id: newUser._id }, SECRET);
      console.log("USER TOKEN = ", userToken);
      res
        .status(201)
        .cookie("chat-app-user", userToken, { httpOnly: true })
        .json(newUser);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  // *login
  loginUser: async (req, res) => {
    const userFromDB = await User.findOne({ email: req.body.email });
    if (!userFromDB) {
      res.status(400).json({ error: "Email does not exist" });
    } else {
      try {
        const isPasswordValid = await bcrypt.compare(
          req.body.password,
          userFromDB.password
        );
        if (isPasswordValid) {
          const userToken = jwt.sign({ id: userFromDB._id }, SECRET);
          console.log("USER TOKEN = ", userToken);
          res.status(201)
            .cookie("chat-app-user", userToken, { httpOnly: true })
            .json({ userFromDB, message: "login successful" });
           
        }
      } catch (error) {
        res.status(401).json(error);
      }
    }
  },

  // *logout
  logoutUser: async (req, res) => {
    
    res.clearCookie("chat-app-user");
    res.json({ successMessage: "User logged out" });
  },
  getAllUsers : async (req, res, next) => {
    try {
      const users  = await User.find({
        //get all users except my user
        _id:{ $ne:req.params.id }
      }).select([
        "email",
        "firstName",
        "lastName",
        "avatarImage",
        "_id"
      ]);
      return res.json(users);
    } catch (err) {
      next(err);
    }
  },
  //* Update User to add Service OR an Avatar
  updateUser: (request, response) =>{
  const user = new User(req.body);
  user.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
  .then((updatedUser)=>{response.json(updatedUser)})
  .catch((err)=>{response.json({ message: 'Something went wrong', error: err })})
}
};

