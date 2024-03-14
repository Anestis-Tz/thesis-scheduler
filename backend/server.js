const http = require("http");

const express = require("./rest.js");

const PORT = process.env.PORT || 3000;

const server = http.createServer(express);

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
