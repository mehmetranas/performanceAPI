const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const routes = require("./routes/api");
const bodyParser = require("body-parser");

const app = express();

// Connect Database
connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use("/api", routes);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
