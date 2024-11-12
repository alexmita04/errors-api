const express = require("express");
const router = express.Router();
const errorsController = require("../controllers/Errors");

router.get("/", errorsController.getAllErrors);

router.get("/random", errorsController.getRandomError);

router.get("/random/:errorPrefix", errorsController.getRandomErrorWithPrefix);

router.get("/timeout", errorsController.getTimeoutError);

router.get("/:errorCode", errorsController.getError);

module.exports = router;
