// IMPORTING LIBRARIES
const express = require("express");
const bodyParser = require("body-parser");
var morgan = require("morgan");

// console.log(fsm.commonInterval("AAPL","7 days"));
// console.log(fsm.customInterval("AAPL","2021-05-15", "2021-05-21"));

// APP INITIALISATION
const app = express();

// CONFIGURING APPLICATION
app.use(morgan("combined")); // Log in Command LIne
app.use(bodyParser.json()); // support json encoded bodies

// ROUTE FILES
const routes = require("./web_service");

// APP ROUTING
app.use("/", routes);

// APP LISTENING
app.listen(5000, "127.0.0.1", (req, res) => {
	console.log(`Server is running on ${"127.0.0.1"}:${5000}`);
});
