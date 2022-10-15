const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    const stream = fs.createReadStream('test.txt');
    stream.pipe(res);
});

app.listen(8080, () => {
    console.log(`Server is running at http://localhost:8080`);
});