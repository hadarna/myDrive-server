const express = require("express");
const router = express.Router();
const folderBL = require("../BL/folder.service")

router.get("/get", async (req, res) => {
    console.log(req.query)
    try {
        const readFolder = await folderBL.readFolder(req.query.q);
        res.send(readFolder)
    }
    catch (error) {
        console.log(error)
    }
})

router.all("/", async (req, res) => {
    try {
        const myDrive = await folderBL.creatMyDrive();
        console.log(myDrive)
    }
    catch (error) {
        console.log(error)

    }
})

// router.post("/new", async (req, res) => {
router.get("/new", async (req, res) => {
    try {
        // const addFolder = await folderBL.createNewFolder(req.body);
        const addFolder = await folderBL.createNewFolder(req.query.q);

        console.log("check", addFolder)
        res.send(addFolder)
    }
    catch (error) {
        console.log(error)

    }
})

router.post("/download", async (req, res) => {
    try {
        const downloadFolder = await folderBL.downloadZipFolder(req.body, res);
        res.send(downloadFolder)
    }
    catch (error) {
        console.log(error)
    }
})

router.put("/delete", async (req, res) => {
    try {
        await folderBL.deleteFolder(req.body);
        res.send("success")
    }
    catch (error) {
        console.log(error)
    }
})

router.get("/content", async (req, res) => {
    console.log(req.query)
    try {
        const contentFolder = await folderBL.contentFolder(req.query.q);
        res.send(contentFolder)
    }
    catch (error) {
        console.log(error)
    }
})

module.exports = router;