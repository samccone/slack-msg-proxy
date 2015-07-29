var Client = require('slack-client');
var io = require('socket.io')();
var client = new Client(process.env.SLACK_API_KEY, true, true);

client.on('message', function() {
  io.emit('message');
});

client.login();

io.listen(process.env.SLACK_STREAM_PORT || 9999);
