// Server variables
const express = require('express');
const path = require('path');
const app = express();
var http = require('http');
PORT = process.env.PORT || 3000;

// io client managenent
var allClients = [];

// Tempo trackers
var startTime;
var intervalTimer;
var beatCounts = 0;
var tempo = 120
var rate = 60000/tempo
DELAY_INTERVALS = 1;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/practice-app'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/practice-app/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// Handle sockets
var io = require('socket.io').listen(server);
io.on('connection', function (socket) {

  // Keep track of all online clients
  allClients.push(socket);
  // Connection change
  updateActiveClients()

  // Start calculating tempo
  if (startTime == null){
    startInterval()
  }
  // client request handlers
  socket.on('requestNextBeat', function() {
    sendNextBeat(socket);
  });

  socket.on('requestNewTempo', function (data) {
    // If new tempo, reset everything, start new timer
    if (tempo != data.tempo) {
      resetInterval()
      tempo = data.tempo
      rate = 60000/tempo
      startInterval()
      allClients.forEach(function (socket){
        sendNextBeat(socket)
      });
    }
  });

  // sync all clients
  socket.on('syncDevices' , function(){
    resetInterval()
    startInterval()
    allClients.forEach(function (socket){
      sendNextBeat(socket)
    });
  });

  // On client disconnect, remove client from list
  socket.on('disconnect', function() {
      var i = allClients.indexOf(socket);
      allClients.splice(i, 1);
      updateActiveClients()
      // If no more client left, end timer
      if(allClients.length == 0){
        resetInterval();
      }
   });

  // sync time between all clients and central server
  socket.on('timesync', function (data) {
    socket.emit('timesync', {
      id: data && 'id' in data ? data.id : null,
      result: Date.now()
    });
  });
});


// Tempo management helpers

// Calculate and send the next coming beat for client to run
function sendNextBeat(socket){
  var nextBeat = startTime + beatCounts*rate + rate;
  socket.emit('nextBeatSent', {
    nextBeat: nextBeat,
    tempo: tempo
  });
}

// Start keeping track of central time
function startInterval(){
  clearInterval(intervalTimer);
  beatCounts = 0;
  startTime = Date.now();
  intervalTimer = setInterval(function(){
    ++beatCounts;
  }, rate)
}

// Reset central clock
function resetInterval(){
  clearInterval(intervalTimer);
  startTime = null;
  beatCounts = 0;
}

// Send number of clients out
function updateActiveClients(){
  var clientCount = allClients.length
  allClients.forEach(function (socket){
    socket.emit("clientCount", {count: clientCount})
  });

}
