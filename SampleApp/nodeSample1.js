



// request from port number 8081
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, World! This is SampleApp running on Node.js.</h1>');
});
server.listen(8081, () => {
    console.log('Server is listening on port 8081');
});