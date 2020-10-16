"use strict";
const express = require("express"), bodyParser = require("body-parser"), firebase = require("firebase-admin"), serviceAccount = require("./perfanalyzerapi.json"), dayjs = require("dayjs"), app = express();
require("dotenv").config();
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL,
});
const db = firebase.database();
app.use(bodyParser.text());
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/log", (req, res) => {
    db.ref("metrics").once("value", (snapshot) => {
        res.json(snapshot.val());
    });
});
app.post("/log", (req, res) => {
    const { fcp, ttfb, domLoad, windowLoad } = JSON.parse(req.body);
    const getMetrics = {
        fcp: {
            type: "fcp",
            time: dayjs().format("HH:mm:ss"),
            value: fcp,
        },
        ttfb: {
            type: "ttfb",
            time: dayjs().format("HH:mm:ss"),
            value: ttfb,
        },
        domLoad: {
            type: "domLoad",
            time: dayjs().format("HH:mm:ss"),
            value: domLoad,
        },
        windowLoad: {
            type: "windowLoad",
            time: dayjs().format("HH:mm:ss"),
            value: windowLoad,
        },
    };
    console.log("getMetrics: ", getMetrics);
    db.ref("metrics").push().set(getMetrics);
});
module.exports = app;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
//# sourceMappingURL=app.js.map