const express = require("express"),
  router = express.Router(),
  { Pages } = require("./pages"),
  Users = require("./users");

const pages = new Pages(router);
const users = new Users(router);
const pagesFunction = () => {
  pages.unauthorized();
  pages.notFound();
  return router;
};
const userAPI = () => {
  users.userList();
  return router;
};

module.exports = {
  pagesFunction,
  userAPI,
};
