exports.getAllErrors = (req, res) => {
  res.send("all errors");
};

exports.getRandomError = (req, res) => {
  res.send("random error");
};

exports.getRandomErrorWithPrefix = (req, res) => {
  res.send(`random error with prefix: ${req.params.errorPrefix}`);
};

exports.getTimeoutError = (req, res) => {
  res.send("timeout error");
};

exports.getError = (req, res) => {
  res.send(`an error, code error: ${req.params.errorCode}`);
};
