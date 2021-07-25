const express = require("express");
const app = express();
const mongoose = require("mongoose");
const todos = require("./routes/api/todos");
const bodyParser = require("body-parser");

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB configuration
const dbURL = require("./config/keys").mongoURL;

//Setting DB connection
mongoose
  .connect(dbURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("mongodb connection successful"))
  .catch((err) => console.log(err));

//Using routes
app.use("/api/todos", todos);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));
