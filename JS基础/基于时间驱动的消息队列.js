class MyEventBus {
  constructor() {
    this.message = {}
  }
  addMessage(apiName, res) {
    if (this.message[apiName]) {
      this.message[apiName](res)
      this.message[apiName] = undefined
    }
  }
  registerEventBus(apiName, callback) {
    this.message[apiName] = callback
  }
}
// 缓存
function requestPreloadCache() {
  const cache = {}
  return async (apiName) => {
    if (cache[apiName]) {
      return { store: 'cache', value: cache[apiName] }
    }
    const res = await requestApi(apiName)
    cache[apiName] = res.response
    return { store: 'no-cache', value: cache[apiName] }
  }
}

function requestApi(apiName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ apiName, response: '请求拿到了' })
    }, 200)
  })
}
const myEventBus = new MyEventBus()
const apiName = 'api2'
async function tem(apiName) {
  const te = requestPreloadCache(apiName)
  return await te(apiName)
}
tem(apiName).then(res => {
  myEventBus.addMessage(apiName, res)
})
setTimeout(() => {
  tem(apiName).then(res => {
    myEventBus.addMessage(apiName, res)
  })
}, 500)

myEventBus.registerEventBus(apiName, (e) => {
  console.log(apiName, e);
})

myEventBus.registerEventBus(apiName, (e) => {
  console.log(apiName, e);
})