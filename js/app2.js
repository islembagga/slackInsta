var http = require('http');

httpServer = http.createServer(function(req,res){
	res.end('hello world');
});
httpServer.listen(1337);

var io = require('socket.io').listen(httpServer);