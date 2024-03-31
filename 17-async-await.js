
const { readFile } = require("fs");
const path = require("path");

function getText(path) {
    return new Promise((resolve, reject) => {
        readFile(path, `utf8`, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}

async function start() {
    try {
        const first = await getText(`./content/subfolder/first.txt`);
        const second = await getText(`./content/subfolder/second.txt`);
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
start();