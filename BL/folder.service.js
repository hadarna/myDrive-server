const fs = require("fs");

function creatMyDrive() {
    let isExist = fs.existsSync('./myDrive')
    if (!isExist) {
        fs.mkdirSync('./myDrive')
    }
}
async function readFolder(path) {
    let folderSend = fs.readdirSync(path, (err, folder) => {
        if (err) {
            console.log(err);
            return
        }
    })
    let folders = folderSend.filter((f) => fs.statSync(`${path}/${f}`, f).isDirectory())
    console.log(folders);
    return folders
}

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


module.exports = { creatMyDrive, createNewFolder, readFolder }


