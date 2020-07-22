const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require('../auth/auth-router')
const usersRouter = require('../users/user-router')
const restrict = require('../auth/ristrict-middleware')





const server = express();




server.use(helmet());
server.use(express.json());
server.use(cors());


server.use('/api/auth',  authRouter)
server.use('/api/users', restrict, usersRouter)

server.get("/", (req, res) => {
    res.json({ api: "up" });
  });

module.exports = server;