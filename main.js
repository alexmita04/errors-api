if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./config.env" });
}
const express = require("express");
const app = express();
const errorRouter = require("./routes/Errors");

app.use("/errors", errorRouter);

app.use("*", (err, req, res, next) => {
  res.send(err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening to requests on port ${PORT}`);
});
