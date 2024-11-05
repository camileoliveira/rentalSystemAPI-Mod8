const router = require("./src/router/router");
const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something Broke!");
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});