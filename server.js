var http = require('http').Server(handler);
var io = require('socket.io')(http);
var fs = require('fs');
var path = require('path');

var botRoom = require('./botroom.js')();
var chintu = require('./bots/chintu_bot.js')();
botRoom.newBot(chintu);

function handler(req, res) {
    if (req.url === '/') {
        fs.readFile(path.resolve(__dirname, 'index.html'), function(err, data) {

            if (!err) {
                res.write(data);
                res.end();
            }
        });
    }
}

botRoom.onReply(function(message) {
    io.emit('message', message);
});

io.on('connection', function(socket) {
    socket.on('join', function(name) {
        botRoom.newHuman(name);
    });

    socket.on('message', function(message) {
        botRoom.newMessage(message);
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
