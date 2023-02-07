const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/dates");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));

const port = process.env.PORT || 4000;
app.use("/termine", routes);
app.listen(port, () => console.log(`Server running on port ${port}`));
