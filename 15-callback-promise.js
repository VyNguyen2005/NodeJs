
const { readFile, writeFile } = require("fs").promises;
// const util = require(`util`);
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

async function getText(){
    try {
        const first = await readFile(`./content/subfolder/first.txt`, `utf8`);
        const second = await readFile(`./content/subfolder/second.txt`, `utf8`);
        console.log(first, second);
        await writeFile(`./content/subfolder/result-async-promise`, `THIS IS AWESOME: ${first} ${second}`, {flag: `a`});
    } 
    catch (err) {
        console.log(err);
    }
}
getText();