const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const mongoURI = "mongodb://mongo:27017/mydatabase";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const ItemSchema = new mongoose.Schema({
  name: String,
});

const Item = mongoose.model("Item", ItemSchema);

app.get("/", (req, res) => {
  res.send("Welcome to Node.js + MongoDB App!");
});

app.post("/items", async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.json(newItem);
});

app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));