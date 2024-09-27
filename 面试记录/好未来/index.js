// 深度遍历
function myFun(arr, deep) {
  if (!Array.isArray(arr)) {
    return deep
  }
  return arr.reduce((a, b) => {
    return Math.max(myFun(a, deep + 1), myFun(b, deep + 1))
  })

}
const arr = [[1, 2], [2, 3, 4]]
console.log(myFun(arr, 0));


// ()=> {} this指向问题

const obj = {
  str: 'obj1',
  fn1: function () {
    return function () {
      console.log(this.str)
    }
  },
  fn2: function () {
    return () => {
      console.log(this.str)
    }
  }
}

const fn1 = obj.fn1()
const fn2 = obj.fn2()
fn1()
fn2()