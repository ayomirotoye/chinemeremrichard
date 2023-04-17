const express = require("express");

const db = require("./db");

const app = express();
const PORT = 5000;



/** Decode Form URL Encoded data */
app.use(express.urlencoded());

/** Show page with  task */
app.get("/", (req, res) => {
  res.send('Hello AVVIC');
});


/** Run the app */

// Connecting to database using mongoose library
db.connectToMongoDB().then(()=>{
    // Start Listenting for the server on PORT
app.listen(PORT, () =>
success({
  message: `Server successfully started on http://localhost:${PORT}`,
})
);
})
