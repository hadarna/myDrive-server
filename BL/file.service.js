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

const renameFile = async ({ path, originName, newName }) => {

    if (fs.statSync(`${path}/${originName}`).isDirectory()) {
        fs.renameSync(`${path}/${originName}`, `${path}/${newName}`)
    }
    else {
        let type = originName.split('.').pop();
        fs.renameSync(`${path}/${originName}`, `${path}/${newName}.${type}`)
    }
}


const downloadFile = async (path, res) => {
    res.download(path);

};

const getInformation = async (path) => {
    const information = fs.statSync(path);
    console.log(information);
    return information;
}

const deleteFile = async (path) => {
    fs.unlinkSync(path)
}



module.exports = { readFile, uploadFile, renameFile, downloadFile, getInformation, deleteFile }
