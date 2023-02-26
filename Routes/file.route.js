const express = require("express");
const router = express.Router();
const fileBL = require("../BL/file.service")
const multer = require("multer");
const upload = multer({ dest: "myDrive/" })

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

router.post("/new", upload.any('file'), async (req, res) => {
    try {
        await fileBL.uploadFile(req.files, req.query.q);
        res.send("success")
    }
    catch (error) {
        console.log(error)
    }
})

module.exports = router;

//