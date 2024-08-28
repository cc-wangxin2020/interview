Array.prototype.find = function (fn) {
  if (!Array.isArray(this)) {
    throw new Error(`${this}没有此方法`)
  }
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) return this[i]
  }
  return undefined
}
Array.prototype.findIndex = function (fn) {
  if (!Array.isArray(this)) {
    throw new Error(`${this}没有此方法`)
  }
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) return i
  }
  return -1
}
const arr = [1, 2, 3]
const index = arr.findIndex(item => {
  return item === 1
})

const value = ar.find(item => {
  return item === 0
})
console.log(value);

console.log(index);
