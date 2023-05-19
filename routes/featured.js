const router = require("express").Router();
const Featured = require("../models/featured-model");

router.get("/content", (req, res) => {
  Featured.find({})
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
