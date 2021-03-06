var http = require('http');
var md5 = require('MD5');

httpServer = http.createServer(function(req,res){
	res.end('hello world');
});
httpServer.listen(1337);

var io = require('socket.io').listen(httpServer);
var users = {};
var messages = []; 
var history = 2;

io.sockets.on('connection',function(socket){
	var me=false;
	console.log("new user");

	for(var k in users){
		socket.emit('newusr', users[k])
	}

	for (var k in messages) {
		socket.emit('newmsg', messages[k])
	}
	/***************
	** on a recu un message
	****************/
	socket.on('newmsg', function(message){
		message.user = me;
		date = new Date();
		message.h = date.getHours();
		message.m = date.getMinutes();
		messages.push(message);
		if(messages.length > history){
			messages.shift();
		}
		io.sockets.emit('newmsg', message);
	});


	/*****************
	** je me connecte
	******************/

	socket.on('login',function(user){
		console.log(user);
		me = user;
		me.id = user.mail.replace('@','-').replace('.','-');
		me.avatar = 'https://gravatar.com/avatar/' + md5(user.mail) + '?s=50';
		socket.emit('logged');
		users[me.id] = me;
		socket.broadcast.emit('newusr',me);
	});

	/***************
	** je me deconnecte
	****************/
	socket.on('disconnect',function(){
		if(!me){
			return false;
		}
		delete users[me.id];
		io.sockets.emit('disusr', me);
	});
});