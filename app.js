const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Devops R0 Project');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
