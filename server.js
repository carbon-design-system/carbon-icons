const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '.')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, 'test.html'));
});

app.listen(3333, function() {
console.log(`
Icon pages running:
- index.html ==> http://localhost:3333
- test.html ==> http://localhost:3333/test
`);
});
