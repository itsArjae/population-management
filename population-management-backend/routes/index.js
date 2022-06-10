module.exports = app => {
  var router = require("express").Router();

  // controllers
  const  user = require("../controllers/user/user.js");

  router.post("/create", user.create);
  router.get("/user", user.findAll);
  

  app.use('/api', router);
};