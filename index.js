const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
  res.status(200).json({ message: "Test index.js endpoint" });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`API running on ${PORT}`));