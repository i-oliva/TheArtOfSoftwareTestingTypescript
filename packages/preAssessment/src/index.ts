const http = require('http');
const readline = require('readline');
import getTriangleType from './getTriangleType';

const hostname = '127.0.0.1';
const port = 3000;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  rl.question('First value ', (firstVal: string) => {
    rl.question('Second value ', (secondVal: string) => {
      rl.question('Third value ', (thirdVal: string) => {
        console.log(getTriangleType(parseFloat(firstVal), parseFloat(secondVal), parseFloat(thirdVal)));
        rl.close();
      });
    });
  });

  rl.on('close', function() {
    console.log('\nBYE BYE !!!');
    process.exit(0);
  });
});
