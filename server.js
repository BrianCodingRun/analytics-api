// IMPORTS
const dotenv = require("dotenv");
const express = require("express");
const { analytics } = require("./routes/analytics.routes.js");

// Init dotenv.config for environment variable
dotenv.config();

// App initialize express js
const app = express();

// Authorize json data
app.use(express.json());

// Routes
app.use("/analytics", analytics);

// Define port server
const port = process.env.PORT || 5001;

// Listen port server
app.listen(port, () => console.log(`Server is running on port: ${port}`));
