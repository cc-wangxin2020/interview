function Promise(task) {
  const that = this
  that.status = 'pendding'
  that.value = undefined
  that.onFulfilledQueue = []
  that.onRejectedQueue = []
  function resolve(value) {
    that.value = value
    that.status = 'fulfilled'
    that.onFulfilledQueue.forEach(cb => cb(that.value))
  }
  function reject(reason) {
    that.value = reason
    that.status = 'rejected'
    that.onRejectedQueue.forEach(cb => cb(that.value))
  }
  try {
    task(resolve, reject)
  } catch (e) {
    that.reject(e)
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  const that = this
  if (that.status === 'fulfilled') {
    that.onFulfilledQueue.push(onFulfilled)
  }
  if (that.status === 'rejected') {
    that.onRejectedQueue.push(onRejected)
  }
  return that
}
Promise.prototype.catch = function (onRejected) {
  this.then(null, onRejected)
}

setTimeout(() => {
  console.log(111);
}, 0)