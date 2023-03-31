// create the server
const express = require("express");
const app = express();
// import cors to build the link between the server and the client 
const cors = require("cors")
const cookies = require("cookie-parser")


require("dotenv").config()
// *Global Variables
// create the port 
const PORT = process.env.PORT;
// create the DataBase
const DB = process.env.DB;



// Middleware
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cookies())
app.use(cors({origin:"http://localhost:3000", credentials:true}))

// connect to Database
require("./config/mongoose.config")(DB)

// import routes
require("./routes/user.routes")(app)

// to run the server
app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})