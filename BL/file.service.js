const fs = require("fs");
const basePath = 'root'


function readFolder(path) {
    const isExist = fs.existsSync(path)
    if (isExist) {

    }
}

const readFile = async (path) => {
    let fileSend = fs.readdirSync(path, (err, files) => {
        if (err) {
            console.log(err);
            return
        }
        else {
            console.log("\nCurrent directory filenames:");
            files.forEach(file => {
                console.log(file);
            })
            return files
        }
    })
    return fileSend
}

module.exports = { readFile }

