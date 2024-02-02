require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
//database
require("./db/conn");

//routes
const userRouter = require("./routes/UserRoutes");
const authRouter = require("./routes/AuthRouter");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.use("/user", userRouter);
server.use("/auth", authRouter);

server.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
