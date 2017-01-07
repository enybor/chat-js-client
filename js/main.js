var socket = new WebSocket("ws://localhost:8080");

socket.onopen = function () {
  console.log('Connected.');
};

socket.onclose = function (e) {
  if (e.wasClean) {
    console.log('Connection closed.');
  } else {
    console.log('Broken connections.');
  }
  console.log('Code: ' + e.code + ' reason: ' + e.reason);
};

socket.onmessage = function (e) {
  console.log('The data ' + e.data);
  $('#messages').append($('<li>').text(e.data));
};

socket.onerror = function (error) {
  console.log('The error ' + error.message);
};

$('form').submit(function () {
  var input = $('#message');
  socket.send(input.val());
  input.val('');
  return false;
});