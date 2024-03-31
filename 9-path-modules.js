
const path = require(`path`);

// in ra dau phan cach "\"
console.log(path.sep);

// in duong dan
const filePath = path.join(`/content`, `subfolder`, `text.txt`);
console.log(filePath);

// in ra ten tep
const base = path.basename(filePath);
console.log(base);

// in ra duong dan tuyet doi
const absolute = path.resolve(__dirname, `content`, `subfolder`, `text.txt`);
console.log(absolute);