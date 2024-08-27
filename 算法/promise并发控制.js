const arrPromise = []
for (let i = 0; i < 100; i++) {
  arrPromise[i] = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`第${i}次请求`)
    }, 1000 * Math.random())
  })
}
/**
 * 用Promise控制并发请求数
 *   通过一个并发池控制请求的数量，向请求池中加入请求，当达到最大请求数时等待池中的请求完成并移除后再入池，
 *   直到请求任务被全部执行，并始终保证最大请求数不超过指定数量，最大程度利用带宽
 * 
 */
async function promisePool(task, max = 5) {
  const pool = []
  const res = []
  for (let i = 0; i < task.length; i++) {
    pool.push(task[i])
    if (pool.length === max) {
      await Promise.race(pool)
    }
    const curr = task[i].then((value) => {
      res.push(value)
    }).catch(err => {
      res.push(err)
    }).finally(() => {
      pool.splice(pool.indexOf(curr), 1)
    })
  }
  await Promise.allSettled(task)
  return res
}
promisePool(arrPromise).then(res => {
  console.log(res.length);
})

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('等一下啦')
//   }, 1000)
// })
// async function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 2) {
//       const res = await promise
//       console.log(res);

//     }
//   }
// }
// test()