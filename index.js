const express = require('express'),
  app = express()


app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/test", (req, res) => {
  res.send("Hello World from test")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))