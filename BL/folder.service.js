const fs = require("fs");


function createNewFolder(data) {
    let ifFolderExist = fs.existsSync(data.path)
    if (!ifFolderExist) {
        fs.mkdirSync(data.path)
    }
    const fullPath = `./${data.path}/${data.name}`;
    let isExist = fs.existsSync(fullPath);
    if (isExist && (fs.statSync(fullPath)).isDirectory()) {
        console.log("is exsist")
        return false;
    }
    fs.mkdirSync(fullPath)
    return true;
}


module.exports = { createNewFolder }


