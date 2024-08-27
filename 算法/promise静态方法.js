/**
 * Primise.all 
 *  Promise的实例方法，传入由单个prmoise组成的列表或可迭代对象
 *  当所有promsie状态变为`fulfilled`，返回的promise状态为`fulfilled`, 并按照arr的顺序返回所有`promise`的结果
 *  当有一个`promise`状态变为`rejected`，返回的`promise`状态为`rejected`，并将第一个rejected的结果返回
 * 
 * @param {Iterable} arr - 可迭代对象可以为空 
 * @returns {Promise}
 */
Promise.all = function (arr) {
  if (typeof arr[Symbol.iterator] !== 'function') {
    throw new Error(`${arr}必须是可迭代对象`)
  }
  return new Promise((resolve, reject) => {
    const result = []
    let count = 0
    for (let i = 0; i < arr.length; i++) {
      arr[i].then((res) => {
        result[i] = res
        count += 1
        if (count === arr.length) {
          resolve(result)
        }
      }, err => {
        reject(err)
      })
    }
  })
}
/**
 * Promise.allSeteled
 *  promise的实例方法：接收一个可迭代的对象或者为空
 *  返回一个fulfilled的promise对象，返回一个对象列表，每一个对象表示原promise的结果
 *  [
 *    {status: 'fulfilled', value: 'value1'},
 *    {status: 'fulfilled', value: 'value1'},
 *    {status: 'rejected', reason: 'err'},
 *    {status: 'fulfilled', value: 'value1'}
 *  ]
 * @param {Iterable} arr 
 * @returns {Promise}
 */
Promise.allSettled = function (arr) {
  if (typeof arr[Symbol.iterator] !== 'function') {
    throw new Error(`${arr}必须是可迭代对象`)
  }
  return new Promise((resolve, reject) => {
    const res = []
    let count = 0
    for (let i = 0; i < arr.length; i++) {
      arr[i].then((value) => {
        res[i] = {
          status: 'fulfilled', value: value
        }
      }, err => {
        res[i] = {
          status: 'rejected', value: err
        }
      }).finally(() => {
        count++
        if (count === arr.length) {
          resolve(res)
        }
      })
    }
  })
}
/**
 * Promise.any 
 *   返回一个promise对象，传入的promise列表只要有一个状态变为`fulfilled`，其结果就为`fulfilled`
 * @param {Iterable} arr 
 * @returns 
 */
Promise.any = function (arr) {
  if (typeof arr[Symbol.iterator] !== 'function') {
    throw new Error(`${arr}必须是可迭代对象`)
  }
  return new Promise((resolve, reject) => {
    let count = 0
    const res = []
    for (let i = 0; i < arr.length; i++) {
      arr[i].then(res => {
        resolve(res)
      }, err => {
        count += 1
        res[i] = err
        if (count === arr.length) {
          reject(res)
        }
      })
    }
  })
}
/**
 * Promise.race 
 *  返回一个promise对象，其状态由传入的最先被兑现的promise决定
 * @param {Iterable} arr 
 * @returns 
 */
Promise.race = function (arr) {
  if (typeof arr[Symbol.iterator] !== 'function') {
    throw new Error(`${arr}必须是可迭代对象`)
  }
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].then(res => {
        resolve(res)
      }, err => {
        reject(err)
      })
    }
  })
}

// Promise
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise1')
  }, 200)
})
const promise2 = new Promise((resolve, reject) => {
  resolve('promise2 出错啦')
})

const promise3 = Promise.resolve('promise3')
const arrPromise = [promise1, promise2, promise3]
Promise.all(arrPromise).then(res => {
  console.log(res);
}, err => {
  console.log(err);
})
Promise.allSettled(arrPromise).then(res => {
  console.log(res);

})

Promise.any(arrPromise).then(res => {
  console.log('======', res);
})

Promise.race(arrPromise).then(res => {
  console.log('race', res);

})