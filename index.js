const express = require('express');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080');
});

app.use('/css', express.static(__dirname + '/css'));
app.use('/script', express.static(__dirname + '/script'));
app.use('/images', express.static(__dirname + '/images'));

app.use('/ottogi/css', express.static(__dirname + '/ottogi/css'));
app.use('/ottogi/script', express.static(__dirname + '/ottogi/script'));
app.use('/ottogi/images', express.static(__dirname + '/ottogi/images'));

app.use('/kyochon2/css', express.static(__dirname + '/kyochon2/css'));
app.use('/kyochon2/images', express.static(__dirname + '/kyochon2/images'));

app.get('/index.html', function (요청, 응답) {
  응답.sendFile(__dirname + '/index.html');
});

app.get('/cnu.html', function (요청, 응답) {
  응답.sendFile(__dirname + '/cnu.html');
});

app.get('/kyochon2/index.html', function (요청, 응답) {
  응답.sendFile(__dirname + '/kyochon2/index.html');
});

app.get('/ottogi/index.html', function (요청, 응답) {
  응답.sendFile(__dirname + '/ottogi/index.html');
});
