"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express"), bodyParser = require("body-parser"), app = express();
const firebase_1 = __importDefault(require("./db/firebase"));
const getMetrics_1 = require("./data/getMetrics");
require("dotenv").config();
app.use(bodyParser.text());
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/log", (req, res) => {
    firebase_1.default.ref("metrics").once("value", (snapshot) => {
        res.json(snapshot.val());
    });
});
app.post("/log", (req, res) => {
    const response = getMetrics_1.getMetrics(JSON.parse(req.body));
    firebase_1.default.ref("metrics").push().set(response);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
module.exports = app;
//# sourceMappingURL=app.js.map