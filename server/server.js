// create the server
const express = require("express");
const app = express();
// import cors to build the link between the server and the client 
const cors = require("cors")
const cookies = require("cookie-parser")
const userRoutes = require("./routes/user.routes");
const messageRoute = require("./routes/messagesRoute");
const socket = require("socket.io");

app.use("/api/auth", userRoutes);
app.use("/api/message", messageRoute);

require("dotenv").config()
// *Global Variables
// create the port 
const PORT = process.env.PORT;
// create the DataBase
const DB = process.env.DB;



// Middleware
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cookies());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// connect to Database
require("./config/mongoose.config")(DB)

// import routes
require("./routes/user.routes")(app)

// to run the server
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);
const io = require('socket.io')(server, { cors: true });
//store all online users inside this map
global.onlineUsers =  new Map();
io.on("connection",(socket)=>{
    global.chatSocket = socket;
    socket.on("add-user",(userId)=>{
        onlineUsers.set(userId,socket.id);
    });

    socket.on("send-msg",(data)=>{
        const sendUserSocket = onlineUsers.get(data.to);
        if(sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-recieved",data.message);
        }
    });
});
