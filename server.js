import express from "express";
import Queue from "better-queue";
import _ from "lodash";


const app = express();
const PORT = 5000;

//Generate an array of 20 random tasks;
var tasksList = _.times(20, _.uniqueId.bind(null, "task_"));

/** Decode Form URL Encoded data */
app.use(express.urlencoded());

/** Show page with  task */
app.get("/", (req, res) => {
  res.send(JSON.stringify(tasksList));
});

/** Create queue to process the Items are added to rack*/
var q = new Queue(function (task, cb) {
  console.log(task);
  cb();
},{ maxRetries: 10, retryDelay: 1000 });
q.push(tasksList)
  .on("finish", function (result) {
    console.log(`Task succeeded with`, result);
  })
  .on("failed", function (err) {
    console.log(`Task failed with ${result}!`);
  });

/** Create queue to process the Items are added to rack and items with same id are counted and added*/
let counter = new Queue(function (task, cb) {
  console.log("I have %d %ss.", task.count, task.id);
  cb();
});
counter.push({ id: "apple", count: 1 });
counter.push({ id: "apple", count: 3 });
counter.push({ id: "orange", count: 1 });
counter.push({ id: "orange", count: 2 });

/*Items are listed in the order in which they are added */

/* Items can be fetched based on pattern*/
var greeter = new Queue(
  function (name, cb) {
    console.log("Hello,", name);
    cb();
  },
  {
    filter: function (input, cb) {
      if (input === "anna") {
        return cb(null, input.toUpperCase());
      } else if (input == "Glory") {
        return cb(null, input.toUpperCase());
      }
      return cb("not_allowed");
    },
  }
);
greeter.push("anna"); // Prints 'Hello, ANNA!'
greeter.push("Bob");
greeter.push("Glory");

/** Run the app */
app.listen(PORT, () => {
  console.log(`server successfully listing at http://localhost:${PORT}`);
});
