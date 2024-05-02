// const express=require("express");
// const mongoose=require("mongoose");
// const cookieParser=require("cookie-parser");

// const authRoutes=require('./routes/auth');
// const groupRoutes=require("./routes/groupChats")
// const userRoutes=require("./routes/userRoute")
// const messageRoutes=require("./routes/messages")

// const cors=require("cors");
// const dotenv=require("dotenv");
// const app=express();
// const port=8000;

// //middlewares
// dotenv.config();
// app.use(express.json());
// app.use(cors());

// //routes
// app.use("/api/auth",authRoutes);
// app.use("/api/groups",groupRoutes);
// app.use("/api/users",userRoutes);
// app.use("/api/messages",messageRoutes);

// console.log(process.env.MONGO_URL)
// mongoose.connect("mongodb+srv://kalaiselvan1623:D5cTXZa5K8yXYL78@cluster0.yj9ft9x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// )
// .then(()=>{
//     app.listen(port,()=>{
//         console.log("Connected to db...");
//         console.log(`App is listening in port ${port}`);
//     })
    
// })
// .catch((err)=>{
//     console.log(err);
// })

const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth");
const groupRoutes = require("./routes/groupChats");
const userRoutes = require("./routes/userRoute");
const messageRoutes = require("./routes/messages");

const cors = require("cors");
const Message = require("./modals/messages");

const app = express();
const port = 8000;

dotenv.config();
app.use(express.json());
app.use(cors());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);


const server = http.createServer(app);

const wss = new WebSocket.Server({ server });
wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", async(message,isBinary) => {
    message=message.toString('utf-8')
    // console.log(message)
    const data=JSON.parse(message);
    // console.log("Recieved message:",JSON.parse(message));
    // try{
    //   const parsedMessage=JSON.parse(message);
    //   console.log(parsedMessage)
    //   const newMessage=new Message({
    //     senderId:parsedMessage.senderId,
    //     chatId:parsedMessage.chatId,
    //     text:parsedMessage.text,
    //   })
    //   await newMessage.save();
    //   console.log("message saved");
    // }
    // catch(err)
    // {
    //   console.log("Recieved error:",err);
    // }
    wss.clients.forEach((client) => {
      console.log("sending messages to client");
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        console.log(data);
        client.send(JSON.stringify(data));
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to db...");
  
    server.listen(port, () => {
      console.log(`App is listening in port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
