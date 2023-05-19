const router = require("express").Router();
const User = require("../models/user-model");

const verify = require("./verify-token");

router.get("/find/:id", verify, async (req, res) => {
  User.findById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json("error"));
});

module.exports = router;


