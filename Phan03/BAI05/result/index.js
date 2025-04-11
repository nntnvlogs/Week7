const express = require("express");
const { Client } = require("pg");

const app = express();
const client = new Client({
  host: "db",
  user: "postgres",
  password: "postgres",
  database: "voting",
});

client.connect();

app.get("/", async (req, res) => {
  const result = await client.query(
    "SELECT vote, COUNT(*) as count FROM votes GROUP BY vote"
  );
  res.json(result.rows);
});

app.listen(5001, () => console.log("Result app running on port 5001"));