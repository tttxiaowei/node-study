const async_hooks = require('async_hooks');
let indent = 0;
async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    // console.log(1)
    // console.log(`init`, asyncId, type, triggerAsyncId)
    return
    const eid = async_hooks.executionAsyncId();
    const indentStr = ' '.repeat(indent);
    console.log(`init: ${indentStr}${type}(${asyncId}):` + ` trigger: ${triggerAsyncId} execution: ${eid}\n`);
  },
  before(asyncId) {
    console.log(`before: ${asyncId}\n`);
    indent += 2;
  },
  after(asyncId) {
    indent -= 2;
    console.log(`after: ${asyncId}\n`);
  },
  destroy(asyncId) {
    console.log(`destroy: ${asyncId}\n`);
  },
}).enable();

setTimeout(() => {
  console.log('>>>', async_hooks.executionAsyncId());
}, 0);
// new Promise((resolve) => resolve(true)).then((a) => {});