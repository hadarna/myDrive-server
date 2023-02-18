const express = require("express");
const router = express.Router();
const folderBL = require("../BL/folder.service")


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