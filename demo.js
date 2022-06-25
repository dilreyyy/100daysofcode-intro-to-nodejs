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
const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();

//TO HANDLE ALL REQUESTS 
app.use(express.urlencoded({extended: false}));

//ROUTE FOR CURRENTTIME PAGE
app.get('/currenttime', function(req, res){
    res.send("<h1>" +new Date().toISOString() +"</h1>");
});

//HOME PAGE ROUTE 
app.get('/', function(req, res){
    // res.send("<h1>Hello, world!");
    res.send("<form action='/store-user' method='POST'><label>Username: </label><input type='text' name='username'/><button>Submit</button></form>")
});

//ROUTE FOR ENTER USERNAME PAGE
app.post('/store-user', function(req, res){
    const userName = req.body.username;

    const filePath = path.join(__dirname, 'data', 'users.json');
    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);

    existingUsers.push(userName);

    fs.writeFileSync(filePath, JSON.stringify(existingUsers));

    // console.log(userName);
    res.send("<h3>User stored!");
});

//DISPLAY USERNAME ROUTE 
app.get('/display-users', function(req, res){
    const filePath = path.join(__dirname, 'data', 'users.json');
    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);

    let displayUsers = "<ul>";

    for (const user of existingUsers){
        displayUsers += "<li>" +user +"</li>"; 
    }

    displayUsers += "</ul>";

    res.send(displayUsers);

});

app.listen(3000);