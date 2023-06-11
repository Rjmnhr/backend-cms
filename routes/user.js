const router = require("express").Router();
const User = require("../models/user-model");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const verify = require("./verify-token");

cloudinary.config({
  cloud_name: "dsw1ubwyh",
  api_key: "828222755219982",
  api_secret: "MolGuQIrdoVwSH6cTgQdmPt0bak",
});
const upload = multer({ dest: "/uploads" });

router.get("/find/:id", verify, async (req, res) => {
  User.findById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json("error"));
});

router.put("/update/:id", upload.single("image"), async (req, res) => {
  if (!req.file) {
    res.status(400).send("No file uploaded");
    return;
  }

  const result = await cloudinary.uploader.upload(req.file.path);
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        profilePic: result.secure_url,
      },
    },
    { new: true }
  )

    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json("error"));
});

module.exports = router;
