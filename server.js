// IMPORTS
const dotenv = require("dotenv");
const express = require("express");
const { analytics } = require("./routes/analytics.routes.js");
const cors = require("cors");

// Init dotenv.config for environment variable
dotenv.config();

// App initialize express js
const app = express();

// Authorize json data
app.use(express.json());

// Cors config
let corsOptions = {
  origin: process.env.ORIGIN_CORS_AUTHORIZE,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// Routes
app.use("/analytics", analytics);

// Define port server
const port = process.env.PORT || 5001;

// Listen port server
app.listen(port, () => console.log(`Server is running on port: ${port}`));
