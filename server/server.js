var http = require('http'),
    url = require('url'),
    fs = require('fs'),
    path = require('path');
    baseRoot = '../client';
   
http.createServer(function(request, response) {
   var urlParse = url.parse(request.url).pathname,
       pathname =  baseRoot + urlParse,
       contentType = getContentType(urlParse);
    
    if (urlParse === '/') {
        pathname = baseRoot + '/index.html'; 
    }
    if (pathname.indexOf('/getStudents') != -1) {
        pathname = './studentList.json';
    }

    if (pathname.indexOf('/getColors') != -1) {
        pathname = './colorList.json';
    }
    
    response.writeHead(200, {"Content-Type": contentType});
     if (pathname.indexOf('.css') != -1 || pathname.indexOf('.js') != -1 
            || pathname.indexOf('.html') != -1 || pathname.indexOf('.json') != -1
            || pathname.indexOf('.ico') != -1) {

            fs.exists(pathname, function(exists) {
                if (!exists) {
                    response.writeHead(404);
                    response.write('Bad request');
                    response.end();
                } else {
                    var file = fs.createReadStream(pathname);

                    file.on('open', function (){
                        response.writeHead(200, {"Content-Type": contentType});
                        file.pipe(response);
                    });
                }
            });
        } else {
                    var file = fs.createReadStream(baseRoot + '/index.html');
                               
                    file.on('open', function (){
                        file.pipe(response);
                    });
        } 
}).listen(3002);

function getContentType (pathname) {
    var extname = String(path.extname(pathname)).toLowerCase(),
        mimeTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpg',
            '.gif': 'image/gif',
            '.wav': 'audio/wav',
            '.mp4': 'video/mp4',
            '.woff': 'application/font-woff',
            '.ttf': 'applilcation/font-ttf',
            '.eot': 'application/vnd.ms-fontobject',
            '.otf': 'application/font-otf',
            '.svg': 'application/image/svg+xml'
        };

    return mimeTypes[extname];
}
