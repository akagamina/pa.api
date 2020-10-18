const express = require("express"),
  bodyParser = require("body-parser"),
  app = express();

import db from "./db/firebase";
import { getMetrics } from "./data/getMetrics";

require("dotenv").config();

app.use(bodyParser.text());

app.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Hello World");
});
app.get("/log", (req: any, res: { json: (arg0: string) => void }) => {
  db.ref("metrics").once("value", (snapshot: { val: () => string }) => {
    res.json(snapshot.val());
  });
});

app.post("/log", (req: { body: string }, res: any) => {
  const response = getMetrics(JSON.parse(req.body));

  db.ref("metrics").push().set(response);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

module.exports = app;
