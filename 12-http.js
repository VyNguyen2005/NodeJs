
const http = require(`http`);

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end(`Welcome to our home page`);
//     }
//     else if (req.url === `/about`) {
//         res.end(`Here is our short history`);
//     }
//     else
//     {
//         res.end(`
// <h1>Oops!</h1>
// <p>We can't seem to find the page you are looking for</p>
// <a href = "/">back home </a>`);
//     }
// });

// USING EVENT EMITTER API
const server = http.createServer();
// emits request event
// subcribe to it/ listen for it / respond to it
server.on(`request`, (req, res) => {
    res.end(`Welcome!`);
});


server.listen(5000, () => {
    console.log(`Server listening on port: 5000...`);
});