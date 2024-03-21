console.log(1)
setTimeout(() => {
  console.log(6)
}, 0)
console.log(2)
new Promise((resolve, reject) => {
  console.log(3)
  resolve('promise then')
}).then(resolve => {
  console.log(resolve)
})
console.log(4)
process.nextTick(() => {
  console.log('nextTick')
})
console.log(5)

// ECMAScript 2015 引入了作业队列的概念，Promise 使用了该队列（也在 ES6/ES2015 中引入）。 这种方式会尽快地执行异步函数的结果，而不是放在调用堆栈的末尾。
// 在当前函数结束之前 resolve 的 Promise 会在当前函数之后被立即执行。
