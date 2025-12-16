const http=require('http');
const app=require('./app'); //import application
const port=3000;

//create server and import
const server=http.createServer(app);

server.listen(port);