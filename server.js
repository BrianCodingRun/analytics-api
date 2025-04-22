// IMPORTS
import dotenv from "dotenv";
import express from "express";

// Init dotenv.config for environment variable
dotenv.config();

// App initialize express js
const app = express();

// Define port server
const port = process.env.PORT || 5001;

// Listen port server
app.listen(port, () => console.log(`Server is running on port: ${port}`));
