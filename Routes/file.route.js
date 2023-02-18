const express = require("express");
const router = express.Router();
const fileBL = require("../BL/file.service")


router.get("/get", async (req, res) => {
    console.log(req.query)
    try {
        const readFiles = await fileBL.readFile(req.query.q);
        res.send(readFiles)
    }
    catch (error) {
        console.log(error)
    }
})
module.exports = router;