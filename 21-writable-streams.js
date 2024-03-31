const http = require(`http`);
const fs = require(`fs`);

http.createServer(function(req, res){
    const fileStream = fs.createReadStream(`./content/subfolder/big.txt`, `utf8`);
    // Đọc dữ liệu vào bộ nhớ
    // fileStream.on(`data`, (result) => {
    //     console.log(result);
    // })
    // Gữi trực tiếp tới phản hồi của y/c HTTP
    fileStream.on(`open`, () => {
       fileStream.pipe(res);
    });
    fileStream.on(`error`, (err) => {
        res.end(err);
    });
})
    .listen(5000);