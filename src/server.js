require('dotenv').config();
const http = require("http");
const express = require("express");
const apiRoutes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", apiRoutes);

const server = http.createServer(app);
server.listen(port, () => console.log(`Server listening on port: ${port}`));

