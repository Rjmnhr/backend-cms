const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const featuredRoute = require("./routes/featured");

//App config
const app = express();
const port = process.env.PORT || 8002;

//middleware
dotenv.config();
app.use(Cors());
app.use(express.json());

//DB config
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/content", postRoute);
app.use("/api/featured", featuredRoute);

app.listen(port, () => console.log(`server is up on ${port}`));
