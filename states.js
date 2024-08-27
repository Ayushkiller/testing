const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("public")); // Serve static files from 'public' folder
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const dataFilePath = path.join(__dirname, "states-and-districts.json");
const data = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));

// Endpoint to get states
app.get("/states", (req, res) => {
  const states = data.states.map((stateObj) => stateObj.state);
  res.json({ states });
});

// Endpoint to get districts for a given state
app.get("/districts/:state", (req, res) => {
  const state = req.params.state;
  const stateObj = data.states.find((s) => s.state === state);
  const districts = stateObj ? stateObj.districts : [];
  res.json({ districts });
});

// Serve the form
app.get("/select-location", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
