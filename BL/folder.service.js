const fs = require("fs");
const AdmZip = require('adm-zip');



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

function downloadZipFolder({ path }, res) {
    const zip = new AdmZip();
    path = path.substring(2)
    let dirName = __dirname.split('\BL')[0] + path
    dirName = dirName.split('/')[0]
    zip.addLocalFolder(path)
    const downloadName = `downloadDrive ${Date.now()}.zip`;
    const data = zip.toBuffer();


    zip.writeZip(dirName + "/" + downloadName);
    res.set('Content-Type', 'application/zip');
    res.set('Content-Disposition', `attachment; filename=${downloadName}`);
    res.set('Content-Length', data.length);
    res.send(data);
}

function deleteFolder({ path }) {
    fs.rmSync(path, { recursive: true, force: true });
}

function contentFolder(path) {
    const content = fs.readdirSync(path)
    return content
}

module.exports = { creatMyDrive, createNewFolder, readFolder, downloadZipFolder, deleteFolder, contentFolder }


