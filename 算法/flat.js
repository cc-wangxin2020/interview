Array.prototype.flat = function (deep = 1) {
  const self = this
  let res = []
  deep--
  for (let p of self) {
    if (Array.isArray(p) && deep >= 0) {
      res = res.concat(p.flat(deep))
    } else {
      res.push(p)
    }
  }
  return res
}
const arr = [1, [1, 2], [1, 2, 3, [2, 3, 4]]]
console.log(arr.flat(1));

