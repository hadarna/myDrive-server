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


router.put("/rename", async (req, res) => {
    try {
        console.log(req.body)
        await fileBL.renameFile(req.body);
        res.send("success")
    }
    catch (error) {
        console.log(error)
    }
})

router.post("/download", async (req, res) => {
    try {
        console.log(req.body.path)
        await fileBL.downloadFile(req.body.path, res);
        res.send("success")
    }
    catch (error) {
        console.log(error)
    }
})

router.get("/getInfo", async (req, res) => {
    console.log("check", req.query)
    try {
        let info = await fileBL.getInformation(req.query.q);
        res.send(info)
    }
    catch (error) {
        console.log(error)
    }
})



module.exports = router;

//