//require request
//function handle request from server with request and response params
    //send a response code
//create server with handle request parameter
//listen to server with port params

const http = require('http');
function handleRequest(request, response){
    response.statusCode = 200;
    response.end('<h1>Hello, World!</h1>');
}
const server = http.createServer(handleRequest);
server.listen(3000);