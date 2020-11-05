const express = require("express");
const helmet = require("helmet");

const db = require("./data/connection.js");

const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Test index.js endpoint" });
});

//GET ENDPOINT
server.get("/test", (req, res) => {
  // console.log('accounts')
  db
    //db selection
    .select("*")
    .from("car_specs") //<<<<<< //WHERE IS ACCOUNTS COMING FROM
    //
    .then((resp) => {
      console.log('"Then" in the get endpoint.');
      res.status(200).json({ data: resp });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// //POST ENDPOINT
server.post("/", async (req, res) => {
  const postData = req.body; //<<<<<<
  try {
    const results = await db("car_specs").insert(postData, "id"); //<<<<
    res.status(201).json({ data: results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`API running on ${PORT}`));
