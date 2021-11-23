require("dotenv").config();
const express = require("express"),
  { pagesFunction, userAPI } = require("./routers/index"),
  path = require("path"),
  hbs = require("hbs"),
  cors = require("cors"),
  port = process.env.PORT,
  { Server } = require("./classes/servers");
const server = new Server(express);
server.sets("view engine", "hbs");
//server.uses(express.static("public"));
server.sets("views", "./views");
hbs.registerPartials(
  path.join(__dirname, "/views/components"),
  function (err) {}
);
server.uses(express.urlencoded({ extended: true }));
server.uses(cors());
server.uses(express.json());
server.routes("/api/user/", userAPI());
server.routes("/", pagesFunction());
server.listen(port);
