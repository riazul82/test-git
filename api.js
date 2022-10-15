const http = require('http');

http.get('http://api.open-notify.org/astros.json', (res) => {
    let body = '';

    res.on('data', (chunk) => {
        body += chunk;
    });

    res.on('end', () => {
        console.log(JSON.parse(body));
    });
});