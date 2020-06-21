const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Express server up!");
});

app.listen(3000, () => {
	console.log("Server up on port 3000...");
});
