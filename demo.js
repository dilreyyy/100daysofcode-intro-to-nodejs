//NODE JS
//require request
//function handle request from server with request and response params
    //send a response code
//create server with handle request parameter
// //listen to server with port params

// const http = require('http');
// function handleRequest(request, response){
//     //handle request
//     if(request.url == "/currenttime"){
//         response.statusCode = 200;
//         response.end('<h1>' + new Date().toISOString() + '</h1>');
//     }else{
//         response.statusCode = 200;
//         response.end('<h1>Hello, World!</h1>');
//     }
// }
// const server = http.createServer(handleRequest);
// server.listen(3000);

//-----------------------------MIGRATE TO EXPRESS JS---------------------------------//
//require a request using express function
const express = require('express');

const app = express();

app.get('/currenttime', function(req, res){
    res.send("<h1>" +new Date().toISOString() +"</h1>");
});

app.get('/', function(req, res){
    res.send("<h1>Hello, world!");
});

app.listen(3000);