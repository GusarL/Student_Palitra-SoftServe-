var http = require('http'),
    url = require('url'),
    fs = require('fs'),
    path = require('path');
    baseRoot = '../client';
   
http.createServer(function(request, response) {
   var pathname =  baseRoot + url.parse(request.url).pathname;
    
    if (pathname.indexOf('/getStudents') != -1) {
        pathname = './studentList.json';
    }

    if (pathname.indexOf('/getColors') != -1) {
        pathname = './colorList.json';
    }

    if (pathname.indexOf('.css') != -1 || pathname.indexOf('.js') != -1 || pathname.indexOf('.html') != -1 || pathname.indexOf('.json') != -1) {

        fs.exists(pathname, function(exists) {
            if (!exists) {
                response.writeHead(404);
                response.write('Bad request');
                response.end();
            } else {
                var file = fs.createReadStream(pathname);

                file.on('open', function (){
                    file.pipe(response);
                });
            }
        });
    }    
}).listen(3002);

