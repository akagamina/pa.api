const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  firebase = require("firebase-admin"),
  serviceAccount = require("./perfanalyzerapi.json"),
  dayjs = require('dayjs')

require('dotenv').config()


firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
})

const db = firebase.database()

app.use(bodyParser.text())

app.get("/", (req, res) => {
  res.send("Hello World")
})
app.get("/log", (req, res) => {
  res.send("Hello World Log")
})

app.post('/log', (req, res) => {
  const { fcp, ttfb, domLoad, windowLoad } = JSON.parse(req.body)

  const getMetrics = {
    createdAt: dayjs().format(),
    fcp: fcp,
    ttfb: ttfb,
    domLoad: domLoad,
    windowLoad: windowLoad
  }

  console.log('getMetrics: ', getMetrics)

  db.ref("metrics").push().set(getMetrics)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))