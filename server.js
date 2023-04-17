const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

/** Show page with  task */
app.get("/", (req, res) => {
  res.send("Hello AVVIC");
});

/** Run the app */

// Connecting to database using mongoose library
db.connectToMongoDB().then(() => {
  // Start Listenting for the server on PORT
  app.listen(PORT, () =>
    console.log(`Server successfully started on http://localhost:${PORT}`)

  );
});
