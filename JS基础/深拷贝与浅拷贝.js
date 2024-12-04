function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
function deepCopy2(obj) {
  if (obj instanceof Array) {
    const res = []
    obj.forEach((i, v) => {
      res[i] = deepCopy2(v)
    })
    return res
  } else if (obj instanceof Object) {
    const res = {}
    for (let [k,v] in Object.entries(obj)) {
      if (v instanceof Array) {
        res[k] = deepCopy2(v)
      }
    }
    return res
  } else {
    return obj
  }
}
const another = Symbol('123')
const obj = {
  name: 'lili',
  age: 18,
  hobbies: ['singing', 'running', 'dancing'],
  family: {
    father: 'tom',
    mother: 'jerry'
  },
  another: '123',
  toDo: function () {
    console.log('go study')
  }
}

// const obj2 = deepCopy(obj)
// console.log(obj2)
const obj3 = deepCopy2(obj)
console.log(obj3);
