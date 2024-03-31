

const { readFile } = require(`fs`);

function getText(path){
    return new Promise((resolve, reject) => {
        readFile(path, `utf8`, (err, result) => {
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        });
    })
}
getText(`./content/subfolder/first.txt`)
         .then((result) => console.log(result))
         .catch((err) => console.log(err));


