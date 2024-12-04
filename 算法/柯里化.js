function curry(fn) {
  const self = this
  const myArr = Array.from(arguments).slice(1)
  return function () {
    const temArr = myArr.concat(Array.from(arguments))
    if (temArr.length >= fn.length) {
      return fn.apply(self, temArr)
    } else {
      return curry.apply(self, [fn].concat(temArr))
    }
  }
}


function calcSum(num1, num2, num3) {
  return num1 + num2 + num3;
}
const calcSumCurry = curry(calcSum);

const log = console.log;
log(calcSumCurry(4, 5)()(5));
log(calcSumCurry(5)(6)(3));
