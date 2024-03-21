const { reject } = require('bluebird');
const http = require('http');

process.on('beforeExit', (code) => {
    console.log('进程 beforeExit 事件的代码: ', code);
});

process.on('exit', (code) => {
    console.log('进程 exit 事件的代码: ', code);
});

process.on('disconnect', (code) => {
    console.log('进程 disconnect 事件的代码: ', code);
});

process.on('message', (message, sendHandle) => {
    console.log('进程 message 事件的: ', message, sendHandle);
});

process.on('multipleResolves', (type, promise, value) => {
    console.log('进程 multipleResolves 事件的: ', type);
});
new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
        resolve();
    }, 1000)
})

process.on('rejectionHandled', (promise) => {
    console.log('进程 rejectionHandled 事件的: ');
});

process.on('unhandledRejection', (promise) => {
    console.log('进程 unhandledRejection 事件的: ');
});

process.on('uncaughtException', (promise) => {
    console.log('进程 uncaughtException 事件的: ');
});

process.on('warning', (warning) => {
    console.log('进程 warning 事件的: ', warning);
});

process.emitWarning('出错啦', {
  code: 'MY_WARNING',
  detail: '一些额外的信息'
});

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('你好世界\n');
}).listen(8000);

process.exitCode = 111
console.log('此消息最新显示')

// 从 stdin 开始读取，因此进程不会退出。
process.stdin.resume();

// process.abort()
