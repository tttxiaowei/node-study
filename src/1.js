// const http = require('http')
// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('你好世界\n')
// })

// server.listen(port, hostname, () => {
//   console.log(`服务器运行在 http://${hostname}:${port}/`)
// })

// console.error(12312)


// var ProgressBar = require('progress');

// var bar = new ProgressBar(':bar', { total: 10 });
// var timer = setInterval(function () {
//   bar.tick();
//   if (bar.complete) {
//     console.log('\ncomplete\n');
//     clearInterval(timer);
//   }
// }, 100);


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`你叫什么名字?`, name => {
  console.log(`你好 ${name}!`)
  readline.close()
})