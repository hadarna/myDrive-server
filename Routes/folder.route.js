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

router.post("/new", async (req, res) => {
    try {
        const addFolder = await folderBL.createNewFolder(req.body);
        console.log(addFolder)
        res.send(addFolder)
    }
    catch (error) {
        console.log(error)

    }
})



module.exports = router;