let http = require('http');
let fs = require('fs');
let server = http.createServer((request, response) => {
    let rUrl = request.url
    if (rUrl != '/favicon.ico') {
        rUrl = rUrl === '/' ? '/index.html' : rUrl;
        let filename = './view' + rUrl;
        if (fs.existsSync(filename)) {
            let data = fs.readFileSync(filename);

            // response.setHeader();
            response.end(data);
        } else {
            filename = './view/404.html';
            let data = fs.readFileSync(filename);
            response.end(data);
        }
    }
    // console.log(request.url);
    // response.end('hello node');
})
server.listen(8000, () => { console.log('your app run localhost:8000') })