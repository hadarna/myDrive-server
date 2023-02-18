const express = require("express");
const router = express.Router();

const folderRoute = require("./folder.route");
const filerRoute = require("./file.route");


router.use("/folder", folderRoute);
router.use("/file", filerRoute);







module.exports = router;