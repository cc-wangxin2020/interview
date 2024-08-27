class MyEventBus {
  constructor() {
    this.message = {}
  }
  // 订阅
  $on(type, callback) {
    if (!this.message[type]) {
      this.message[type] = [callback]
      return
    }
    this.message[type].push(callback)
  }
  // 发布
  $emit(type, args) {
    if (!this.message[type]) {
      return
    }
    this.message[type].forEach(item => {
      item(args)
    });
  }
  // 取消订阅
  $off(type, callback) {
    if (!this.message[type]) {
      return
    }
    if (!callback) {
      this.message[type] = undefined
      return
    }
    this.message[type].splice(this.message[type].indexOf(callback), 1)
  }
}

const eventBus = new MyEventBus()

eventBus.$on('click1', (value) => {
  console.log('click1 - callback1: ', value);
})

eventBus.$on('click1', (value) => {
  console.log('click1 - callback2: ', value);
})

eventBus.$on('click2', (value) => {
  console.log('click2 - callback1: ', value);
})

eventBus.$on('click2', (value) => {
  console.log('click2 - callback2: ', value);
})
eventBus.$on('click2', (value) => {
  console.log('click2 - callback3: ', value);
})
eventBus.$emit('click1', { name: 'tom1', age: '1234' })
eventBus.$off('click1')
eventBus.$emit('click1', { name: 'tom', age: '123' })