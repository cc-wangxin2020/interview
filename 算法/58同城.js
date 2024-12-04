// 如何保证两个while循环在当前JS线程运行且不会卡死
// while(1) {
//   console.log('1')
// }
// while(1) {
//   console.log('2')
// }

// 提示：
// const promise1 = Promise.resolve(1)
// const promise2 = Promise.resolve(2)
// Promise.all([promise1, promise2])
function sleep(delay) {
  return new Promise((resolve, reject) => setTimeout(() => {
    resolve()
  }, delay))
}
async function myFun1() {
  while (1) {
    console.log(1)
    await sleep(40)
  }
}

async function myFun2() {
  while (1) {
    console.log(2)
    await sleep(40)
  }
}

// Promise.all([myFun1(), myFun2()])



// 递归的方式实现斐波那契数列， 并保存数据
const map = new Map()
function F(n) {
  if (n === 1 || n === 2) {
    if (!map.has(n)) {
      map.set(n, n)
    }
    return map.get(n)
  }
  const n1 = map.get(n - 1) || F(n - 1)
  const n2 = map.get(n - 2) || F(n - 2)
  if (!map.has(n - 1)) {
    map.get(n - 1, F(n - 1))
  }
  if (!map.has(n - 2)) {
    map.get(n - 2, F(n - 2))
  }
  return n1 + n2
}

console.log(F(5))

// 如何阻止arr被push
const arr = ['app1', 'app2']
Object.defineProperty(arr, 'push', {
  get() {
    return undefined
  }
})
arr.push(58)
console.log(arr)