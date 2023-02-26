const fs = require("fs");


const readFile = async (path) => {
    let fileSend = fs.readdirSync(path, (err, files) => {
        if (err) {
            console.log(err);
            return
        }
    })
    let files = fileSend.filter((f) => (!fs.statSync(`${path}/${f}`, f).isDirectory()))

    return files;
}

const uploadFile = async (file, path) => {
    fs.renameSync(`./myDrive/${file[0].filename}`, `${path}/${file[0].originalname}`)
}

module.exports = { readFile, uploadFile }

